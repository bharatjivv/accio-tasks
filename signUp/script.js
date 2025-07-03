class SignupForm {
    constructor() {
        this.form = document.getElementById('signupForm');
        this.submitButton = document.getElementById('submitButton');
        this.formFeedback = document.getElementById('formFeedback');
        
        this.validators = {
            fullName: this.validateFullName.bind(this),
            email: this.validateEmail.bind(this),
            password: this.validatePassword.bind(this),
            confirmPassword: this.validateConfirmPassword.bind(this),
            birthDate: this.validateBirthDate.bind(this),
            role: this.validateRole.bind(this),
            terms: this.validateTerms.bind(this)
        };

        this.init();
    }

    init() {
        this.attachEventListeners();
        this.setupDateInput();
    }

    attachEventListeners() {
        // Form submission
        this.form.addEventListener('submit', this.handleSubmit.bind(this));

        // Real-time validation
        Object.keys(this.validators).forEach(fieldName => {
            const field = this.form.elements[fieldName];
            if (field) {
                if (field.type === 'radio') {
                    // Handle radio buttons
                    const radioButtons = this.form.querySelectorAll(`input[name="${fieldName}"]`);
                    radioButtons.forEach(radio => {
                        radio.addEventListener('change', () => this.validateField(fieldName));
                    });
                } else {
                    field.addEventListener('blur', () => this.validateField(fieldName));
                    field.addEventListener('input', () => this.clearFieldError(fieldName));
                    
                    // Special handling for password to show requirements
                    if (fieldName === 'password') {
                        field.addEventListener('input', () => this.updatePasswordRequirements());
                    }
                }
            }
        });

        // Clear feedback on input
        this.form.addEventListener('input', () => {
            this.hideFormFeedback();
        });
    }

    setupDateInput() {
        const birthDateInput = document.getElementById('birthDate');
        birthDateInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2);
            }
            if (value.length >= 5) {
                value = value.substring(0, 5) + '/' + value.substring(5, 9);
            }
            e.target.value = value;
        });
    }

    validateField(fieldName) {
        const validator = this.validators[fieldName];
        if (validator) {
            return validator();
        }
        return true;
    }

    validateFullName() {
        const field = this.form.elements.fullName;
        const value = field.value.trim();
        
        if (!value) {
            this.showFieldError('fullName', 'Full name is required');
            return false;
        }
        
        if (value.length < 2) {
            this.showFieldError('fullName', 'Full name must be at least 2 characters');
            return false;
        }

        if (!/^[a-zA-Z\s'-]+$/.test(value)) {
            this.showFieldError('fullName', 'Full name can only contain letters, spaces, hyphens, and apostrophes');
            return false;
        }

        this.showFieldSuccess('fullName');
        return true;
    }

    validateEmail() {
        const field = this.form.elements.email;
        const value = field.value.trim();
        
        if (!value) {
            this.showFieldError('email', 'Email is required');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            this.showFieldError('email', 'Please enter a valid email address');
            return false;
        }

        this.showFieldSuccess('email', 'Valid email address');
        return true;
    }

    validatePassword() {
        const field = this.form.elements.password;
        const value = field.value;
        
        if (!value) {
            this.showFieldError('password', 'Password is required');
            return false;
        }

        const requirements = {
            length: value.length >= 8,
            uppercase: /[A-Z]/.test(value),
            lowercase: /[a-z]/.test(value),
            number: /\d/.test(value),
            special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value)
        };

        const failedRequirements = Object.entries(requirements)
            .filter(([key, passed]) => !passed)
            .map(([key]) => key);

        if (failedRequirements.length > 0) {
            this.showFieldError('password', 'Password does not meet all requirements');
            return false;
        }

        this.showFieldSuccess('password');
        return true;
    }

    updatePasswordRequirements() {
        const password = this.form.elements.password.value;
        
        const requirements = {
            'req-length': password.length >= 8,
            'req-uppercase': /[A-Z]/.test(password),
            'req-lowercase': /[a-z]/.test(password),
            'req-number': /\d/.test(password),
            'req-special': /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
        };

        Object.entries(requirements).forEach(([id, isValid]) => {
            const element = document.getElementById(id);
            if (element) {
                element.classList.toggle('valid', isValid);
            }
        });
    }

    validateConfirmPassword() {
        const field = this.form.elements.confirmPassword;
        const passwordField = this.form.elements.password;
        const value = field.value;
        
        if (!value) {
            this.showFieldError('confirmPassword', 'Please confirm your password');
            return false;
        }

        if (value !== passwordField.value) {
            this.showFieldError('confirmPassword', 'Passwords do not match');
            return false;
        }

        this.showFieldSuccess('confirmPassword');
        return true;
    }

    validateBirthDate() {
        const field = this.form.elements.birthDate;
        const value = field.value;
        
        if (!value) {
            this.showFieldError('birthDate', 'Birth date is required');
            return false;
        }

        const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
        if (!dateRegex.test(value)) {
            this.showFieldError('birthDate', 'Please enter a valid date in MM/DD/YYYY format');
            return false;
        }

        const [month, day, year] = value.split('/').map(Number);
        const date = new Date(year, month - 1, day);
        const today = new Date();
        
        if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
            this.showFieldError('birthDate', 'Please enter a valid date');
            return false;
        }

        if (date > today) {
            this.showFieldError('birthDate', 'Birth date cannot be in the future');
            return false;
        }

        const age = today.getFullYear() - date.getFullYear();
        if (age < 13) {
            this.showFieldError('birthDate', 'You must be at least 13 years old');
            return false;
        }

        this.showFieldSuccess('birthDate');
        return true;
    }

    validateRole() {
        const roleInputs = this.form.querySelectorAll('input[name="role"]');
        const isSelected = Array.from(roleInputs).some(input => input.checked);
        
        if (!isSelected) {
            this.showFormFeedback('Please select your role (Student or Employee)', 'error');
            return false;
        }

        return true;
    }

    validateTerms() {
        const field = this.form.elements.terms;
        
        if (!field.checked) {
            this.showFormFeedback('You must agree to the Terms and Conditions', 'error');
            return false;
        }

        return true;
    }

    showFieldError(fieldName, message) {
        const field = this.form.elements[fieldName];
        const errorElement = document.getElementById(`${fieldName}Error`);
        const successElement = document.getElementById(`${fieldName}Success`);
        
        if (field) {
            field.classList.remove('valid');
            field.classList.add('invalid');
        }
        
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
        
        if (successElement) {
            successElement.classList.remove('show');
        }
    }

    showFieldSuccess(fieldName, message = '') {
        const field = this.form.elements[fieldName];
        const errorElement = document.getElementById(`${fieldName}Error`);
        const successElement = document.getElementById(`${fieldName}Success`);
        
        if (field) {
            field.classList.remove('invalid');
            field.classList.add('valid');
        }
        
        if (errorElement) {
            errorElement.classList.remove('show');
        }
        
        if (successElement && message) {
            successElement.textContent = message;
            successElement.classList.add('show');
        }
    }

    clearFieldError(fieldName) {
        const field = this.form.elements[fieldName];
        const errorElement = document.getElementById(`${fieldName}Error`);
        
        if (field) {
            field.classList.remove('invalid');
        }
        
        if (errorElement) {
            errorElement.classList.remove('show');
        }
    }

    showFormFeedback(message, type) {
        this.formFeedback.textContent = message;
        this.formFeedback.className = `form-feedback ${type} show`;
    }

    hideFormFeedback() {
        this.formFeedback.classList.remove('show');
    }

    validateForm() {
        let isValid = true;
        
        Object.keys(this.validators).forEach(fieldName => {
            if (!this.validateField(fieldName)) {
                isValid = false;
            }
        });

        return isValid;
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        this.submitButton.disabled = true;
        this.submitButton.textContent = 'Signing up...';
        
        if (!this.validateForm()) {
            this.showFormFeedback('Please correct the errors above', 'error');
            this.submitButton.disabled = false;
            this.submitButton.textContent = 'Signup';
            return;
        }

        // Simulate API call
        try {
            await this.simulateApiCall();
            this.showFormFeedback('Account created successfully! Welcome aboard!', 'success');
            this.form.reset();
            this.clearAllValidationStates();
        } catch (error) {
            this.showFormFeedback('An error occurred. Please try again.', 'error');
        } finally {
            this.submitButton.disabled = false;
            this.submitButton.textContent = 'Signup';
        }
    }

    simulateApiCall() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate 90% success rate
                if (Math.random() > 0.1) {
                    resolve();
                } else {
                    reject(new Error('Server error'));
                }
            }, 2000);
        });
    }

    clearAllValidationStates() {
        const inputs = this.form.querySelectorAll('.form-input');
        inputs.forEach(input => {
            input.classList.remove('valid', 'invalid');
        });

        const errorMessages = this.form.querySelectorAll('.error-message, .success-message');
        errorMessages.forEach(message => {
            message.classList.remove('show');
        });

        // Reset password requirements
        const requirements = this.form.querySelectorAll('.password-requirements li');
        requirements.forEach(req => {
            req.classList.remove('valid');
        });
    }
}

// Initialize the form when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SignupForm();
});

// Add screen reader only class for accessibility
const style = document.createElement('style');
style.textContent = `
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
`;
document.head.appendChild(style);