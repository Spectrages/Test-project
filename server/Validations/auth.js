import { body } from 'express-validator'

export const registerValidation = [
    body('email', 'Invalid mail format').isEmail(),
    body('fullName', 'Enter your name').isLength({min: 2}),
    body('password', 'Password must be at least 6 characters').isLength({min: 6}),
    body('bio', 'Fill out your bio (minimum 10 characters)').isLength({min: 10}),
];

export const loginValidation = [
    body('email', 'Invalid mail format').isEmail(),
    body('password', 'Password must be more than 6 characters').isLength({min: 6}),
];