const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// --- ईमेल सेटअप (Nodemailer) ---
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sawantdipak653@gmail.com', // तुझा ईमेल
        pass: 'rcox gcdp kpgk tulq'   // Google App Password (नेहमीचा पासवर्ड नको)
    }
});

app.post('/book-event', (req, res) => {
    const { eventType, name, email, guests } = req.body;

    // युजरला जाणारा ईमेल मजकूर
    const mailOptions = {
        from: 'Eventify Management <sawantdipak653@gmail.com>',
        to: email,
        subject: 'Confirmation: Your Event Booking is Successful! 🎉',
        html: `
            <div style="font-family: Arial, sans-serif; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
                <h2 style="color: #ff4757;">Hello ${name}!</h2>
                <p>Congratulations! Your booking for <strong>${eventType}</strong> is confirmed.</p>
                <p><strong>Details:</strong></p>
                <ul>
                    <li>Event Type: ${eventType}</li>
                    <li>Estimated Guests: ${guests}</li>
                </ul>
                <p>Our team will contact you shortly to make your event memorable.</p>
                <br>
                <p>Best Regards,<br><strong>Dipak Sawant</strong><br>Eventify Management</p>
            </div>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send({ success: false });
        }
        res.status(200).send({ success: true });
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));