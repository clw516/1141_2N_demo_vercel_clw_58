import Wrapper from '../assets/wrappers/BookList_58';
import books_data from '../assets/data/booklist_data2';

console.log('books_data', books_data);
const BookListPge_58 = () => {
  return (
    <Wrapper>
      <section className='booklist'>
        {books_data.map((book) => {
          return (
            <article className='book'>
              <img src={book.img} />
              <div className='bookinfo'>
                <h1>{book.title}</h1>
                <h4>{book.author}</h4>
              </div>
            </article>
          );
        })}
      </section>
    </Wrapper>
  );
};

export default BookListPge_58;
