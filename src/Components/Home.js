import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
    let [find, setFind] = useState("");
    let [found, setFound] = useState(null);

    function findWord() {
        axios
            .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${find}`)
            .then((response) => {
                console.log(response.data);
                setFound(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="home">
            <div className="search">
                <input
                    type="search"
                    placeholder="Search for a word..."
                    className="input_tag"
                    onChange={(e) => {
                        setFind(e.target.value);
                    }}
                />
                <button className="search_button" onClick={findWord}>
                    Search
                </button>
            </div>
            {found != null && (
                <div className="result">
                    {found.map((finder) => {
                        return (
                            <div className="per_word">
                                <h1>{finder.word}</h1>
                                <p>{finder.phonetic}</p>
                                {finder.phonetics.map((audio) => {
                                    return (
                                        <div>
                                            {audio.audio && (
                                                <div>
                                                    <audio controls>
                                                        <source
                                                            src={audio.audio}
                                                            type="audio/mpeg"
                                                        />
                                                    </audio>
                                                    {/* <audio
                                                        src={audio.audio}
                                                        controls
                                                    /> */}
                                                    <p className="audio_para">
                                                        {audio.text}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                                {finder.meanings.map(
                                    (meaning) =>
                                        meaning.partOfSpeech && (
                                            <div>
                                                <h1>{meaning.partOfSpeech}</h1>
                                                {meaning.definitions.map(
                                                    (def) =>
                                                        def && (
                                                            <p>
                                                                {def.definition}
                                                            </p>
                                                        )
                                                )}
                                            </div>
                                        )
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Home;
