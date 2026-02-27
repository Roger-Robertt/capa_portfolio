const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
    return (

        <button
            className=' bg-gray-950 text-white font-bold py-4 px-16 rounded-lg transition-transform hover:scale-105 cursor-pointer mb-20'
            onClick={onClick}
        >
            {text}
        </button>

    );
}

export default Button;  