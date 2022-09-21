import React, {useState, link} from 'react';
import posts from "../data/posts.json";
import {Link, useHistory} from "react-router-dom";

const Blognew = () => {
    const history = useHistory();
    const [formState, setFormState] = useState({
        id: "",
        title: "",
        content: "",
        date: "2022-09-20 09:00:00"
    })

    function handleChange(evt) {
        const value = evt.target.value;
        setFormState({...formState, [evt.target.name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(formState);
        posts.push(formState);
        history.push('/blogoverview');

        console.log(posts);
    }

    return (
        <>
            <article>
                <form onSubmit={handleSubmit}>
                    <label>
                              <input type="text"
                               id="id"
                               name="id"
                               placeholder={posts.length+1}
                               value={formState.id}
                               onChange={handleChange}

                        />
                        {formState.id.length < 2 && <p className="error-message"> Enter blogid </p> }
                    </label>
                    <label>
                        <input type="tekst"
                               id="title"
                               name="title"
                               value={formState.title}
                               onChange={handleChange}
                        />
                        {formState.title.length < 15 && <p className="error-message"> Enter more text </p> }
                    </label>
                    <label>
                        <textarea type="text"
                               id="content"
                               name="content"
                               value={formState.content}
                               onChange={handleChange}
                        />
                        {formState.content.length < 20 && <p className="error-message"> Enter more text </p> }
                    </label>
                    <label>
                        <input type="tekst"
                               id="date"
                               name="date"
                               value={formState.date}
                               onChange={handleChange}
                        />
                    </label>
                    <label>
                        <button type="submit" disabled={formState.id.length <1 || formState.title.length < 10 || formState.content.length < 15} > verzend </button>
                    </label>
                </form>
            </article>
            <article>

                <Link to="/">Terug naar Home</Link>
            </article>

        </>
    );
};

export default Blognew;