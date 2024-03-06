import { render, screen } from '@testing-library/vue';
import SignUp from '@/views/sign-up/SignUp.vue';
import { expect, describe, it, beforeEach } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import axios from 'axios';

vi.mock('axios');

describe('Sign Up Page', () => {
    beforeEach(() => {
        render(SignUp);
    });
    
    describe('When User put password values correctly', () => {
        it('should SignUp button be enabled', async () => {
            const user = userEvent.setup();
            const password = screen.getByLabelText('Password', {});
            const passwordRepeat = screen.getByLabelText('Password Repeat', {});
            const button = screen.getByRole('button', {name: 'SignUp'});
            
            await user.type(password, 'P4ssword');
            await user.type(passwordRepeat, 'P4ssword');
            
            expect(button).toBeEnabled();
        });
    });
    
    describe('When User submit the form', () => {
        it('should send User data to the backend', async () => {
            const user = userEvent.setup();
            const userName = screen.getByLabelText('Username', {});
            const email = screen.getByLabelText('E-Mail', {});
            const password = screen.getByLabelText('Password', {});
            const passwordRepeat = screen.getByLabelText('Password Repeat', {});
            const button = screen.getByRole('button', {name: 'SignUp'});
            
            await user.type(userName, 'user');
            await user.type(email, 'user@mail.com');
            await user.type(password, 'P4ssword');
            await user.type(passwordRepeat, 'P4ssword');
            await  user.click(button);
            
            expect(axios.post).toHaveBeenCalledWith('/api/v1/users', {
                username: 'user',
                email: 'user@mail.com',
                password: 'P4ssword'
            });
        });
    });
});
