const Lead = require("../models/lead.models");
const sendEmail = require("../utils/sendEmail");

const otpStore = new Map(); // temporary in-memory storage

/* ============================
   SEND OTP
=============================== */
exports.sendOTP = async (req, res) => {
  try {
    const { name, email, phone, eventType, eventDate, eventLocation, message } =
      req.body;

    // Basic validation
    if (!name || !email || !phone) {
      return res.status(400).json({
        message: "Name, email and phone are required",
      });
    }

    // Check duplicate email
    const existingLead = await Lead.findOne({ email });
    if (existingLead) {
      return res.status(400).json({
        message: "Email already exists.",
      });
    }

    // Generate 6 digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Store OTP with lead data
    otpStore.set(email, {
      otp,
      data: {
        name,
        email,
        phone,
        eventType,
        eventDate,
        eventLocation,
        message,
      },
      createdAt: Date.now(),
    });

    // Send OTP Email
    await sendEmail({
      to: email,
      subject: "Your OTP Verification Code | Bigwig Events",
      html: `
  <div style="margin:0;padding:40px 20px;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
    <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e5e5;">

      <!-- Header -->
      <tr>
        <td align="center" style="padding:35px 30px 20px;">
          <img
            src="https://res.cloudinary.com/dqrlkbsdq/image/upload/v1784537232/logo2_as10wg.webp"
            alt="Bigwig Events"
            style="max-width:180px;height:auto;"
          />
        </td>
      </tr>

      <!-- Content -->
      <tr>
        <td style="padding:0 40px 35px;">
          <h2 style="margin:0 0 15px;color:#222;font-size:26px;">
            Hello ${name},
          </h2>

          <p style="margin:0 0 20px;color:#555;font-size:16px;line-height:1.7;">
            Thank you for choosing <strong>Bigwig Events</strong>.
            Please use the verification code below to continue.
          </p>

          <div style="background:#f8f8f8;border:2px dashed #d4af37;border-radius:10px;padding:22px;text-align:center;margin:30px 0;">
            <div style="font-size:14px;color:#777;letter-spacing:2px;margin-bottom:10px;">
              YOUR VERIFICATION CODE
            </div>

            <div style="font-size:38px;font-weight:bold;color:#111;letter-spacing:10px;">
              ${otp}
            </div>
          </div>

          <p style="margin:0 0 12px;color:#555;font-size:15px;line-height:1.7;">
            This OTP is valid for <strong>5 minutes</strong>.
          </p>

          <p style="margin:0;color:#555;font-size:15px;line-height:1.7;">
            If you did not request this verification code, you can safely ignore this email.
          </p>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="padding:25px;background:#fafafa;border-top:1px solid #eee;text-align:center;">
          <p style="margin:0;color:#888;font-size:13px;line-height:1.8;">
            © ${new Date().getFullYear()} Bigwig Events. All Rights Reserved.
          </p>

          <p style="margin:8px 0 0;color:#999;font-size:12px;">
            Creating Extraordinary Events & Experiences
          </p>
        </td>
      </tr>

    </table>
  </div>
  `,
    });

    res.status(200).json({
      success: true,
      message: "OTP sent successfully.",
    });
  } catch (error) {
    console.error("Send OTP Error:", error);
    res.status(500).json({
      message: "Server error while sending OTP",
    });
  }
};

/* ============================
   VERIFY OTP & SAVE LEAD
=============================== */
exports.verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const record = otpStore.get(email);

    if (!record) {
      return res.status(400).json({
        message: "OTP expired or not found",
      });
    }

    // Check expiry (5 minutes)
    const isExpired = Date.now() - record.createdAt > 5 * 60 * 1000;
    if (isExpired) {
      otpStore.delete(email);
      return res.status(400).json({
        message: "OTP expired",
      });
    }

    if (parseInt(otp) !== record.otp) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    // Save Lead
    const newLead = new Lead({
      ...record.data,
      verified: true,
    });

    await newLead.save();
    otpStore.delete(email);

    /* ===== Confirmation Email ===== */
    await sendEmail({
      to: email,
      subject: "We've Received Your Request | Bigwig Events",
      html: `
  <div style="margin:0;padding:40px 20px;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
    <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e5e5;">

      <!-- Header -->
      <tr>
        <td align="center" style="padding:35px 30px 20px;">
          <img
            src="https://res.cloudinary.com/dqrlkbsdq/image/upload/v1784537232/logo2_as10wg.webp"
            alt="Bigwig Events"
            style="max-width:180px;height:auto;"
          />
        </td>
      </tr>

      <!-- Content -->
      <tr>
        <td style="padding:0 40px 35px;">
          <h2 style="margin:0 0 15px;color:#222;font-size:26px;">
            Hello ${record.data.name},
          </h2>

          <p style="margin:0 0 18px;color:#555;font-size:16px;line-height:1.7;">
            Thank you for reaching out to <strong>Bigwig Events</strong>. We have successfully received your request.
          </p>

          <div style="background:#faf8f3;border-left:4px solid #d4af37;padding:18px 20px;border-radius:8px;margin:25px 0;">
            <p style="margin:0;color:#444;font-size:15px;line-height:1.8;">
              Our team is reviewing your enquiry and will get in touch with you shortly to discuss your requirements and assist you with the next steps.
            </p>
          </div>

          <p style="margin:0;color:#555;font-size:15px;line-height:1.7;">
            We appreciate your interest in Bigwig Events and look forward to creating an unforgettable experience for you.
          </p>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="padding:25px;background:#fafafa;border-top:1px solid #eee;text-align:center;">
          <p style="margin:0;color:#888;font-size:13px;">
            © ${new Date().getFullYear()} Bigwig Events. All Rights Reserved.
          </p>

          <p style="margin:8px 0 0;color:#999;font-size:12px;">
            Creating Extraordinary Events & Experiences
          </p>
        </td>
      </tr>

    </table>
  </div>
  `,
    });

    /* ===== Internal Notification ===== */
    await sendEmail({
      to: "ashima@bigwigmedia.in",
      subject: "🔔 New Lead Received | Bigwig Events",
      html: `
  <div style="margin:0;padding:40px 20px;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
    <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:650px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e5e5;">

      <!-- Header -->
      <tr>
        <td align="center" style="padding:35px 30px 20px;">
          <img
            src="https://res.cloudinary.com/dqrlkbsdq/image/upload/v1784537232/logo2_as10wg.webp"
            alt="Bigwig Events"
            style="max-width:180px;height:auto;"
          />
        </td>
      </tr>

      <!-- Title -->
      <tr>
        <td style="padding:0 40px 25px;">
          <h2 style="margin:0;color:#222;font-size:28px;">
            New Lead Received
          </h2>

          <p style="margin:12px 0 0;color:#666;font-size:15px;line-height:1.7;">
            A new enquiry has been submitted through the <strong>Bigwig Events</strong> website.
          </p>
        </td>
      </tr>

      <!-- Lead Details -->
      <tr>
        <td style="padding:0 40px 35px;">
          <table width="100%" cellpadding="12" cellspacing="0" style="border-collapse:collapse;border:1px solid #ececec;border-radius:8px;overflow:hidden;">

            <tr style="background:#fafafa;">
              <td style="font-weight:bold;width:180px;">Name</td>
              <td>${record.data.name}</td>
            </tr>

            <tr>
              <td style="font-weight:bold;">Email</td>
              <td>${record.data.email}</td>
            </tr>

            <tr style="background:#fafafa;">
              <td style="font-weight:bold;">Phone</td>
              <td>${record.data.phone}</td>
            </tr>

            <tr>
              <td style="font-weight:bold;">Event Type</td>
              <td>${record.data.eventType}</td>
            </tr>

            <tr style="background:#fafafa;">
              <td style="font-weight:bold;">Event Date</td>
              <td>${record.data.eventDate || "-"}</td>
            </tr>

            <tr>
              <td style="font-weight:bold;">Event Location</td>
              <td>${record.data.eventLocation || "-"}</td>
            </tr>

            <tr style="background:#fafafa;">
              <td style="font-weight:bold;vertical-align:top;">Message</td>
              <td>${record.data.message || "-"}</td>
            </tr>

          </table>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="padding:22px;background:#fafafa;border-top:1px solid #eee;text-align:center;">
          <p style="margin:0;color:#888;font-size:13px;">
            This is an automated notification from the Bigwig Events website.
          </p>

          <p style="margin:8px 0 0;color:#999;font-size:12px;">
            © ${new Date().getFullYear()} Bigwig Events. All Rights Reserved.
          </p>
        </td>
      </tr>

    </table>
  </div>
  `,
    });

    res.status(200).json({
      success: true,
      message: "Lead verified and saved successfully.",
    });
  } catch (error) {
    console.error("Verify OTP Error:", error);
    res.status(500).json({
      message: "Server error while verifying OTP",
    });
  }
};

/* ============================
   GET ALL LEADS
=============================== */
exports.getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json(leads);
  } catch (err) {
    console.error("Error fetching leads:", err);
    res.status(500).json({ message: "Server error while fetching leads." });
  }
};

/* ============================
   MARK LEAD AS TRUE
=============================== */
exports.markLead = async (req, res) => {
  const { id } = req.params;
  const { marked } = req.body;

  try {
    if (typeof marked !== "boolean") {
      return res.status(400).json({
        message: "Marked value must be boolean",
      });
    }

    const lead = await Lead.findByIdAndUpdate(id, { marked }, { new: true });

    if (!lead) {
      return res.status(404).json({ message: "Lead not found." });
    }

    res.status(200).json({
      message: "Lead updated successfully.",
      lead,
    });
  } catch (err) {
    console.error("Error updating lead:", err);
    res.status(500).json({
      message: "Server error while updating lead.",
    });
  }
};

/* ============================
   DELETE LEAD
=============================== */
exports.deleteLead = async (req, res) => {
  const { id } = req.params;

  try {
    const lead = await Lead.findByIdAndDelete(id);

    if (!lead) {
      return res.status(404).json({ message: "Lead not found." });
    }

    res.status(200).json({ message: "Lead deleted successfully." });
  } catch (err) {
    console.error("Error deleting lead:", err);
    res.status(500).json({ message: "Server error while deleting lead." });
  }
};
