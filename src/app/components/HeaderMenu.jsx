const HeaderMenu = () => {
    return (
      <div className="space-evenly align-center flex gap-[4rem]">
        <button className="duration-0.2s cursor-pointer rounded-[20px] border-none bg-transparent px-[20px] py-[10px] text-base text-white transition-colors duration-300 hover:cursor-pointer hover:bg-[var(--foreground)] hover:[color:var(--hovertext)]">
          Mac
        </button>
        <button className="duration-0.2s cursor-pointer rounded-[20px] border-none bg-transparent px-[20px] py-[10px] text-base text-white transition-colors duration-300 hover:cursor-pointer hover:bg-[var(--foreground)] hover:[color:var(--hovertext)]">
          iPhone
        </button>
        <button className="duration-0.2s cursor-pointer rounded-[20px] border-none bg-transparent px-[20px] py-[10px] text-base text-white transition-colors duration-300 hover:cursor-pointer hover:bg-[var(--foreground)] hover:[color:var(--hovertext)]">
          iPad
        </button>
        <button className="duration-0.2s cursor-pointer rounded-[20px] border-none bg-transparent px-[20px] py-[10px] text-base text-white transition-colors duration-300 hover:cursor-pointer hover:bg-[var(--foreground)] hover:[color:var(--hovertext)]">
          iWatch
        </button>
        <button className="duration-0.2s cursor-pointer rounded-[20px] border-none bg-transparent px-[20px] py-[10px] text-base text-white transition-colors duration-300 hover:cursor-pointer hover:bg-[var(--foreground)] hover:[color:var(--hovertext)]">
          Support
        </button>
      </div>
    );
}
 
export default HeaderMenu;