
function TitleText() {
    return (
        <>
            <div style={{ width: `calc(100%)` }}>
                <h1

                    className="py-4 text-pink-500 border-y-[1.3px] border-neutral-400 text-6xl xl:text-7xl 2xl:text-8xl overflow-hidden text-nowrap scrollbar-hidden relative"
                >
                    <span
                        style={{
                            display: 'inline-block',
                            fontFamily: '"Rubik Glitch Pop", system-ui',
                            fontWeight: 400,
                            fontStyle: 'normal',
                        }}>
                        Coder Kongs:
                    </span>
                </h1>

                <h2 className="py-3 text-cyan-600 border-b-[1.3px] border-neutral-400 text-4xl xl:text-5xl 2xl:text-6xl overflow-hidden overflow-y-visible text-nowrap scrollbar-hidden relative">

                    <span
                        className="moving-text-h2 "

                        style={{
                            display: 'inline-block',
                            fontFamily: `"Dancing Script", cursive`,
                            fontWeight: 400,
                            fontStyle: `normal`
                        }}>
                        a portfolio building application
                    </span>

                </h2>

            </div>

            <style>
                {`

                    @keyframes slide-right {
                        0% {
                         transform: translateX(-100%); /* Start from the left */
                        }

                        100% {
                            transform: translateX(100%); /* Move to the right */
                        }
                    }

                    .moving-text-h2 {
                        animation: slide-right 10s linear infinite; /* Adjust duration as needed */
                        white-space: nowrap; /* Prevent text from wrapping */
                    }
                `}
            </style>
        </>
    );
}

export default TitleText;