import { render, screen } from '@testing-library/vue';
import SignUp from '@/views/sign-up/SignUp.vue';
import { expect, describe, it, beforeEach } from 'vitest';

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
    
    it('should have Sign Up Button disabled initially', () => {
        const button = screen.getByRole('button', {name: 'Sign Up'});
        
        expect(button).toBeDisabled();
    });
});
