import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-a-quote',
  templateUrl: './get-a-quote.component.html',
  styleUrls: ['./get-a-quote.component.css']
})
export class GetAQuoteComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
    quoteForm: FormGroup;
  
    constructor(private fb: FormBuilder) {
      this.createForm();
    }
  
    
  
    createForm() {
      this.quoteForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message: ['', Validators.required],
      });
    }
  }

onsubmit() {
  const formData = this.quoteForm.value;
  // Send the form data to the server
  // Show a message to the user that their request has been sent
}
