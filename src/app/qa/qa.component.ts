import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'app-qa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent {
  chatHistory: Message[] = [];
  userInput = '';

  sendMessage(): void {
    const trimmed = this.userInput.trim();
    if (!trimmed) return;

    this.chatHistory.push({ sender: 'user', text: trimmed });
    this.chatHistory.push({ sender: 'bot', text: 'جارٍ تحليل سؤالك بواسطة الوكيل...' });

    this.userInput = '';

    setTimeout(() => {
      this.chatHistory.pop(); // remove "جارٍ التحليل"
      this.chatHistory.push({
        sender: 'bot',
        text: 'هذا مكان الرد القانوني بعد التحليل والاسترجاع من الوكلاء.'
      });
    }, 1200);
  }
}
