import './NewsPaper.css'

export const NewsPaper = ({ headline, date, image, summary, url, source }) => {
    return (
        <div className='paper'>
            <div className="header-paper">
                <div className="img-paper">
                    <img src={image} alt="" />
                </div>
                <div className="title-paper">
                    <h2>{headline}</h2>
                    <p>{date}</p>
                </div>
            </div>
            <div className="body-paper">
                <p>{summary}</p>
                <div className="body-bottom">
                    <a href={url} target="_blank" rel="">Enlace</a>
                    <p>Fuente: "{source}"</p>
                </div>
            </div>
        </div>
    )
}