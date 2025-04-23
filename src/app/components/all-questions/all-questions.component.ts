import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-all-questions',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './all-questions.component.html',
  styleUrl: './all-questions.component.scss'
})
export class AllQuestionsComponent {

  @Input() label: string = '';
  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();

  allQuestionsForm = new FormGroup({
    everWorried: new FormControl('', Validators.required),
    fakeNewsFrequency: new FormControl('', Validators.required),
    interestedInAI: new FormControl('', Validators.required),
    functionalities: new FormControl<string[]>([], Validators.required),
    biggestConcerns: new FormControl<string[]>([], Validators.required),
  });

  everWorriedOptions = [
    { value: 'sim', label: 'Sim' },
    { value: 'nao', label: 'Não' },
    { value: 'nao-sei', label: 'Não sei' }
  ];

  fakeNewsFrequencyOptions = [
    { value: 'sempre', label: 'Sempre' },
    { value: 'as-vezes', label: 'Às vezes' },
    { value: 'raramente', label: 'Raramente' },
    { value: 'nunca', label: 'Nunca' }
  ];

  interestedInAIOptions = [
    { value: 'sim', label: 'Sim' },
    { value: 'nao', label: 'Não' },
    { value: 'talvez', label: 'Talvez' }
  ];

  functionalitiesOptions = [
    'Verificação automática de links e textos',
    'Alertas de notícias suspeitas',
    'Explicação do motivo da notícia ser considerada falsa',
    'Sugestão de fontes confiáveis'
  ];
  
  biggestConcernsOptions = [
    'Privacidade dos meus dados',
    'Falhas na identificação de fake news',
    'Lentidão ou dificuldade de uso',
    'Não tenho receios'
  ];

  // Guarda temporariamente o valor do campo 'Outro'
  otherInputs: { [key: string]: string } = {
    functionalities: '',
    biggestConcerns: ''
  };

  onCheckboxChange(event: any, controlName: 'functionalities' | 'biggestConcerns') {
    const control = this.allQuestionsForm.get(controlName) as FormControl<string[]>;
    let selected = control.value ? [...control.value] : [];

    const value = event.target.value;

    if (event.target.checked) {
      // Adiciona se não existir
      if (value && !selected.includes(value)) {
        selected.push(value);
      }
    } else {
      // Remove valor
      selected = selected.filter(v => v !== value);
    }
    control.setValue(selected);
  }

  // Método com problema. Necessário ajustar.
  onOtherInputChange(controlName: 'functionalities' | 'biggestConcerns', event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.otherInputs[controlName] = value;

    const control = this.allQuestionsForm.get(controlName) as FormControl<string[]>;
    let selected = control.value ? [...control.value] : [];

    // Verifica se existe algum valor "Outro:" no array
    const outroIndex = selected.findIndex(v => v.startsWith('Outro:'));

    if (outroIndex !== -1) {
      // Se já existe, atualiza o valor
      if (value) {
        selected[outroIndex] = `Outro: ${value}`;
      } else {
        // Se o input foi apagado, remove o item
        selected.splice(outroIndex, 1);
      }
    } else if (value) {
      // Se não existe e o input não está vazio, adiciona
      selected.push(`Outro: ${value}`);
    }

    control.setValue(selected);
  }


  submit() {
    if (this.allQuestionsForm.valid) {
      this.captureCheckboxArrays();
      this.buttonClick.emit(this.allQuestionsForm.value);
    }
  }

  // Trata os arrays para garantir que o campo "Outro" está incluso se marcado
  captureCheckboxArrays() {
    ['functionalities', 'biggestConcerns'].forEach(controlName => {
      const control = this.allQuestionsForm.get(controlName) as FormControl<string[]>;
      let selected = control.value ? [...control.value] : [];
      const otherValue = this.otherInputs[controlName];
      // Se o checkbox "Outro" estiver marcado e o valor não está no array, adiciona
      if (otherValue && !selected.includes(otherValue)) {
        selected.push(otherValue);
      }
      // Remove valores vazios
      selected = selected.filter(v => !!v);
      control.setValue(selected);
    });
  }
}
