import { Component, input, output } from '@angular/core';
import { FlashcardData } from '../../data/flashcard.data';

@Component({
  selector: 'app-flashcard',
  imports: [],
  templateUrl: './flashcard.html',
  styleUrl: './flashcard.css',
})
export class Flashcard {
  card = input.required<FlashcardData>();
  showAnswer = input.required<boolean>();
  isFirst = input<boolean>(false);
  isLast = input<boolean>(false);

  prev = output();
  next = output();
  toggleAnswer = output();
}