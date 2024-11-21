import express from 'express';
import { createTransport } from 'nodemailer';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.post('/api/sendMail', async (req, res) => {
    const { to, subject, text } = req.body;

    // Configurer le transporteur
    const transporter = createTransport({
        service: 'gmail', // ou 'yahoo', 'hotmail'
        auth: {
            user: 'chrislainavocegan24@gmail.com',
            pass: '774072659NahemaHeaven..',
        },
    });

    // Configurer l'email
    const mailOptions = {
        from: 'chrislainavocegan24@gmail.com',
        to,
        subject,
        text,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email envoyé avec succès');
    } catch (error) {
        res.status(500).send('Erreur lors de l\'envoi de l\'email');
    }
});

app.listen(3000, () => {
    console.log('Serveur en cours d\'exécution sur le port 3000');
});



























/*

service id = service_s8592se

*/
