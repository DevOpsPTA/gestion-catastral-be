import { Router } from 'express';
import { generateAccessToken } from '../../utilities/jwt';

const User = require('../../models/usuarios');

// Se establecen las rutas.
const router = Router();

// Proceso de Login
router.post('/login', async (req, res, next) => {
    try {

        const { body } = req;

        // Get user input
        const { email, password } = body;

        // Validate user input
        if (!(email && password)) {
            res.status(400).json({ message: "All input is required" });
        }

        const user = await User.findOne({ username: email });
        console.log(user);

        // if (user && (await bcrypt.compare(password, user.password))) {
        if (user && (password == user.password)) {
            const accessToken = generateAccessToken(user._id, user.email, user.role);
            res.status(200).json({
                token: accessToken,
                role: user.role
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }

    } catch (err) {
        next(err);
        console.log(err);
    }
})

export default router;