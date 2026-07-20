const Subscriber = require("../models/subscriber.model");
const sendEmail = require("../utils/sendEmail");

/**
 * @desc   Subscribe Email
 * @route  POST /api/subscribers
 */
exports.subscribeEmail = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    let subscriber = await Subscriber.findOne({ email });

    if (subscriber) {
      if (!subscriber.isActive) {
        subscriber.isActive = true;
        await subscriber.save();
      } else {
        return res.status(409).json({
          success: false,
          message: "Email already subscribed",
        });
      }
    } else {
      subscriber = await Subscriber.create({ email });
    }

    const unsubscribeUrl = `${process.env.BACKEND_URL}/subscribers/unsubscribe/${subscriber.unsubscribeToken}`;

    // ✅ Email should NOT break subscription
    try {
      await sendEmail({
        to: email,
        subject: "Welcome to the Bigwig Events Newsletter 🎉",
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
          <h2 style="margin:0 0 18px;color:#222;font-size:26px;">
            Welcome to Bigwig Events! 🎉
          </h2>

          <p style="margin:0 0 18px;color:#555;font-size:16px;line-height:1.7;">
            Thank you for subscribing to the <strong>Bigwig Events</strong> newsletter.
          </p>

          <p style="margin:0 0 18px;color:#555;font-size:15px;line-height:1.8;">
            You'll now receive updates on our latest events, destination experiences,
            luxury celebrations, corporate events, industry insights, and exclusive
            inspirations delivered straight to your inbox.
          </p>

          <div style="background:#faf8f3;border-left:4px solid #d4af37;padding:18px 20px;border-radius:8px;margin:25px 0;">
            <p style="margin:0;color:#444;font-size:15px;line-height:1.8;">
              We're excited to have you as part of our community and look forward to
              helping you create extraordinary experiences.
            </p>
          </div>

          <p style="margin:0;color:#555;font-size:15px;line-height:1.7;">
            Thank you for choosing <strong>Bigwig Events</strong>.
          </p>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="padding:25px;background:#fafafa;border-top:1px solid #eee;text-align:center;">
          <p style="margin:0 0 10px;font-size:13px;color:#666;">
            If you no longer wish to receive these emails,
            <a href="${unsubscribeUrl}" target="_blank" style="color:#d4af37;text-decoration:none;font-weight:600;">
              Unsubscribe here
            </a>.
          </p>

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
    } catch (emailErr) {
      console.error("Email sending failed:", emailErr);
    }

    res.status(201).json({
      success: true,
      message: "Subscribed successfully",
      data: subscriber,
    });
  } catch (error) {
    console.error("Subscribe Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

/**
 * @desc   Get all subscribers (Admin)
 * @route  GET /api/subscribers
 */
exports.getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: subscribers.length,
      data: subscribers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

/**
 * @desc   Soft Unsubscribe (Inactive)
 * @route  PATCH /api/subscribers/:id/unsubscribe
 */
exports.unsubscribeEmail = async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: "Subscriber not found",
      });
    }

    subscriber.isActive = false;
    await subscriber.save();

    res.status(200).json({
      success: true,
      message: "Subscriber marked inactive",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

/**
 * @desc   Unsubscribe via secure token
 * @route  GET /api/subscribers/unsubscribe/:token
 */
exports.unsubscribeByToken = async (req, res) => {
  try {
    const { token } = req.params;

    const subscriber = await Subscriber.findOne({
      unsubscribeToken: token,
    });

    if (!subscriber) {
      return res.send(`
        <h3>Invalid unsubscribe link</h3>
        <p>This link is not valid or already used.</p>
      `);
    }

    if (!subscriber.isActive) {
      return res.send(`
        <h3>Already unsubscribed</h3>
        <p>You are already unsubscribed.</p>
      `);
    }

    subscriber.isActive = false;
    await subscriber.save();

    res.send(`
      <h2>Unsubscribed Successfully</h2>
      <p>${subscriber.email} will no longer receive emails from Bigwig Events.</p>
    `);
  } catch (error) {
    res.send("<h3>Something went wrong</h3>");
  }
};

/**
 * @desc   HARD DELETE subscriber (Admin)
 * @route  DELETE /api/subscribers/:id
 */
exports.deleteSubscriber = async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: "Subscriber not found",
      });
    }

    await subscriber.deleteOne();

    res.status(200).json({
      success: true,
      message: "Subscriber deleted permanently",
    });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
