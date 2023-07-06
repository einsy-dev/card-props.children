import Card from './card';
export default function App() {
    return (
        <>
            <Card title='Card title' content='Some quick example text to build on the card title and make up the bulk of the cards content.' linkTo='#'>
                <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                </svg>
            </Card>

            <Card title='Special title treatment' content='With supporting text below as a natural lead-in to additional content.' linkTo='#' />
        </>
    )
}
