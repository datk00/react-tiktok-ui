function CheckIcon({ width = '20', height = '20', classes }) {
    return (
        <svg
            fontSize="14px"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            className={classes}
        >
            <g clipPath="url(#Icon_Color-Verified_Badge_svg__a)">
                <path d="M0 24a24 24 0 1 1 48 0 24 24 0 0 1-48 0Z" fill="#20D5EC"></path>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M37.12 15.88a3 3 0 0 1 0 4.24l-13.5 13.5a3 3 0 0 1-4.24 0l-8.5-8.5a3 3 0 1 1 4.24-4.24l6.38 6.38 11.38-11.38a3 3 0 0 1 4.24 0Z"
                    fill="#fff"
                ></path>
            </g>
            <defs>
                <clipPath id="Icon_Color-Verified_Badge_svg__a">
                    <path fill="#fff" d="M0 0h48v48H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}

export default CheckIcon;
