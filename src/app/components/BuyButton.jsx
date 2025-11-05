const BuyButton = () => {
    return (
      <div className="col-start-1 row-start-4 place-self-start">
        <h3 className="cursor-pointer rounded-[2rem] border-2 border-black bg-transparent px-[3rem] py-[1rem] transition-colors duration-300 hover:cursor-pointer hover:border-none hover:bg-[var(--foreground)] hover:[color:var(--hovertext)]">
          Buy Now
        </h3>
      </div>
    );
}
 
export default BuyButton;