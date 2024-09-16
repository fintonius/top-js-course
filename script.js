function AddBook(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function() {
        return(`${this.title} was written by ${this.author}. It is ${this.pages} long.`)
    };
};

const theHobbit = new AddBook('the hobbit', 'jrr tolkein', '300');

console.log(theHobbit.info());