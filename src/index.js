import React from 'react';
import ReactDom from 'react-dom';
import 'normalize.css';
(async () => {
    const { characters: data } = await fetch(
        'https://api.jikan.moe/v3/manga/1/characters'
    ).then(res => res.json());
    console.log(data);
    const App = () => (
        <div>
            {data.map((s, i) => (
                <div key={i} style={{ display: 'inline-block' }}>
                    <h3>{s.name}</h3>
                    <img src={s.image_url} />
                </div>
            ))}
        </div>
    );

    ReactDom.render(<App />, document.getElementById('root'));
})();
