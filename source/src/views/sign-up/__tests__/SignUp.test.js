import { render, screen } from '@testing-library/vue';
import SignUp from '@/views/sign-up/SignUp.vue';
import { expect, describe, it, beforeEach } from 'vitest';
import { userEvent } from '@testing-library/user-event';

describe('Sign Up', () => {
    beforeEach(() => {
        render(SignUp);
    });
    
    it('should have Sign Up header', () => {
        const header = screen.getByRole('heading', {name: 'Sign Up'});
        
        expect(header).toBeInTheDocument();
    });
    
    it('should have username input', () => {
        const username = screen.queryByLabelText('Username', {});
        
        expect(username).toBeInTheDocument();
    });
    
    it('should have email input', () => {
        const email = screen.queryByLabelText('Mail', {});
        
        expect(email).toBeInTheDocument();
    });
    
    it('should have password input', () => {
        const password = screen.queryByLabelText('Password', {});
        
        expect(password).toBeInTheDocument();
    });
    
    it('should have type of password input for password input', () => {
        const password = screen.queryByLabelText('Password', {});
        
        expect(password).toHaveAttribute('type', 'password');
    });
    
    it('should have password repeat input', () => {
        const password = screen.queryByLabelText('Password Repeat', {});
        
        expect(password).toBeInTheDocument();
    });
    
    it('should have type of password input for password repeat input', () => {
        const passwordRepeat = screen.queryByLabelText('Password Repeat', {});
        
        expect(passwordRepeat).toHaveAttribute('type', 'password');
    });
    
    it('should have Sign Up button', () => {
        const button = screen.getByRole('button', {name: 'Sign Up'});
        
        expect(button).toBeInTheDocument();
    });
    
    it('should have SignUp Button disabled initially', () => {
        const button = screen.getByRole('button', {name: 'SignUp'});
        
        expect(button).toBeDisabled();
    });
});

describe('When User put password values correctly', () => {
    beforeEach(() => {
        render(SignUp);
    });
    
    it('should enable SignUp button', async () => {
        const user = userEvent.setup();
        const password = screen.getByLabelText('Password', {});
        const passwordRepeat = screen.getByLabelText('Password Repeat', {});
        const button = screen.getByRole('button', {name: 'SignUp'});
        
        await user.type(password, 'P4ssword');
        await user.type(passwordRepeat, 'P4ssword');
        
        expect(button).toBeEnabled();
    });
})
