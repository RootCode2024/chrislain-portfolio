import nodemailer from 'nodemailer';
import validator from 'validator';
import { escape } from 'lodash';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Tous les champs sont requis' });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: 'Adresse email invalide' });
        }

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Portfolio - Contact de : ${escape(name)}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; border-radius: 5px;">
                    <h2 style="color: #333;">Nouveau message de votre portfolio</h2>
                    <p><strong>Nom :</strong> ${escape(name)}</p>
                    <p><strong>Email :</strong> ${escape(email)}</p>
                    <p><strong>Message :</strong></p>
                    <p style="background-color: #fff; padding: 10px; border-radius: 5px;">${escape(message)}</p>
                </div>
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Email envoyé avec succès' });
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'email:', error.message);
            return res.status(500).json({ error: 'Échec de l\'envoi de l\'email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Méthode ${req.method} non autorisée`);
    }
}
