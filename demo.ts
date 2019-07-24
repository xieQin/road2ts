// interface Card {
//     suit: string;
//     card: number;
// }
// interface Deck {
//     suits: string[];
//     cards: number[];
//     createCardPicker(this: Deck): () => Card;
// }
// let deck: Deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     // NOTE: The function now explicitly specifies that its callee must be of type Deck
//     createCardPicker: function(this: Deck) {
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);

//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

// interface Point {
//     x: string
// }

// enum T {
//     false = '1',
//     True = '2'
// }

// const Lie = T.false
// console.log(Lie)

// interface foo {
//     (bar: string): string;
// }

class Queue<T> {
    private data: T[] = []
    push = (item:T) => this.data.push(item)
    pop = ():T | undefined => this.data.shift()
}

const queue = new Queue()
queue.push('1')
queue.push(1)
queue.pop()
queue.pop()