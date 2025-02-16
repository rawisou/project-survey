import React from "react"

const SubmitBook = ({ nextQuestion, book, setBook }) => {

    const onBookSubmitChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target
        setBook((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <form onSubmit={nextQuestion} className="form-suggest-book main-card">
            <label className="title" htmlFor="title">Title
                <input
                    onChange={onBookSubmitChange}
                    type="text"
                    name="title"
                    value={book.title}
                    placeholder="Name the book you recommend"
                />
            </label>

            <label className="author" htmlFor="author">Author
                <input
                    onChange={onBookSubmitChange}
                    type="text"
                    name="author"
                    value={book.author}
                    placeholder="Its author"
                />
            </label>

            <label className="isbn" htmlFor="isbn">ISBN
                <input
                    onChange={onBookSubmitChange}
                    type="text"
                    name="isbn"
                    value={book.isbn}
                    placeholder="Optional"
                />
            </label>
            <button className="submit-book-btn" onClick={nextQuestion}>SUBMIT</button>
        </form>

    )
}

export default SubmitBook