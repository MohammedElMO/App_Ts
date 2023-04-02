type Props = {
    itemsInCard: number;
};
export const NavBar = ({itemsInCard}: Props) => {
    return (
        <h1>
            this is Cards {itemsInCard}
        </h1>            
    );
};