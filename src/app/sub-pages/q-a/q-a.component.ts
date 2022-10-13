import { Component, OnInit } from '@angular/core';
import { QandA } from './QandA-model';

@Component({
  selector: 'app-q-a',
  templateUrl: './q-a.component.html',
  styleUrls: ['./q-a.component.scss']
})
export class QAComponent implements OnInit {

  questions: QandA[];

  constructor() {
    this.questions = [{
      question: 'How often do you go shopping?',
      answer: ' Angular ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officia reprehenderit dolore architecto rerum libero, voluptatem ipsa exercitationem quae suscipit adipisci minus? Eum eveniet error, consequuntur asperiores impedit laudantium atque!'
    },
    {
      question: 'Who do you go shopping with?',
      answer: ' Angular ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officia reprehenderit dolore architecto rerum libero, voluptatem ipsa exercitationem quae suscipit adipisci minus? Eum eveniet error, consequuntur asperiores impedit laudantium atque!'
    },
    {
      question: 'Can I use coupons when you are shopping?',
      answer: ' Angular ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officia reprehenderit dolore architecto rerum libero, voluptatem ipsa exercitationem quae suscipit adipisci minus? Eum eveniet error, consequuntur asperiores impedit laudantium atque!'
    },
    {
      question: 'What kind of budget do you set for shopping?',
      answer: ' Angular ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officia reprehenderit dolore architecto rerum libero, voluptatem ipsa exercitationem quae suscipit adipisci minus? Eum eveniet error, consequuntur asperiores impedit laudantium atque!'
    },
    {
      question: 'Who do you go shopping with?',
      answer: ' Angular ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officia reprehenderit dolore architecto rerum libero, voluptatem ipsa exercitationem quae suscipit adipisci minus? Eum eveniet error, consequuntur asperiores impedit laudantium atque!'
    },
    {
      question: 'Can I use coupons when you are shopping?',
      answer: ' Angular ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officia reprehenderit dolore architecto rerum libero, voluptatem ipsa exercitationem quae suscipit adipisci minus? Eum eveniet error, consequuntur asperiores impedit laudantium atque!'
    },
    {
      question: 'What kind of budget do you set for shopping?',
      answer: ' Angular ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officia reprehenderit dolore architecto rerum libero, voluptatem ipsa exercitationem quae suscipit adipisci minus? Eum eveniet error, consequuntur asperiores impedit laudantium atque!'
    },
    {
      question: 'What’s the most expensive item you have ever bought?',
      answer: ' Angular ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officia reprehenderit dolore architecto rerum libero, voluptatem ipsa exercitationem quae suscipit adipisci minus? Eum eveniet error, consequuntur asperiores impedit laudantium atque!'
    },
    {
      question: 'Can I use coupons when you are shopping?',
      answer: ' Angular ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officia reprehenderit dolore architecto rerum libero, voluptatem ipsa exercitationem quae suscipit adipisci minus? Eum eveniet error, consequuntur asperiores impedit laudantium atque!'
    },
    {
      question: 'What kind of budget do you set for shopping?',
      answer: ' Angular ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officia reprehenderit dolore architecto rerum libero, voluptatem ipsa exercitationem quae suscipit adipisci minus? Eum eveniet error, consequuntur asperiores impedit laudantium atque!'
    },
    {
      question: 'Who do you go shopping with?',
      answer: ' Angular ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officia reprehenderit dolore architecto rerum libero, voluptatem ipsa exercitationem quae suscipit adipisci minus? Eum eveniet error, consequuntur asperiores impedit laudantium atque!'
    },
    {
      question: 'Can I use coupons when you are shopping?',
      answer: ' Angular ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officia reprehenderit dolore architecto rerum libero, voluptatem ipsa exercitationem quae suscipit adipisci minus? Eum eveniet error, consequuntur asperiores impedit laudantium atque!'
    },]
    // this.descriptionIn = false;

   }

  ngOnInit(): void {
  }


  onCollapseAccordion(event: any ){
    if (event.style.display === "block") {
      event.style.display = "none";
  } else {
        event.style.display = "block";
   }  
}

}
