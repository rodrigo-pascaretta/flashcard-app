import { Component, signal, computed } from '@angular/core';
import { FLASHCARDS } from './data/flashcard.data';
import { Flashcard } from './components/flashcard/flashcard';
import { ProgressBar } from './components/progress-bar/progress-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Flashcard, ProgressBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly cards = FLASHCARDS;
  readonly total = this.cards.length;

  currentIndex = signal(0);
  showAnswer = signal(false);

  currentCard = computed(() => this.cards[this.currentIndex()]);
  percent = computed(() => Math.round(((this.currentIndex() + 1) / this.total) * 100));

  navigate(direction: 1 | -1) {
    this.showAnswer.set(false);
    this.currentIndex.update(i =>
      Math.max(0, Math.min(this.total - 1, i + direction))
    );
  }
}
