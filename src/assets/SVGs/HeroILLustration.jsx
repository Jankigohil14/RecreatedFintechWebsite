import React from 'react';

const HeroIllustration = () => {
    return (
        <svg
            className='absolute mix-blend-lighten -translate-y-3/4 -translate-x-1/2 max-w-none mt-16 md:mt-0 -z-10  top-1/4 left-1/2 pointer-events-none'
            width='960'
            height='960'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
        >
            <defs>
                <filter
                    x='-32.6%'
                    y='-32.8%'
                    width='165.2%'
                    height='165.6%'
                    filterUnits='objectBoundingBox'
                    id='b'
                >
                    <feGaussianBlur stdDeviation='50' in='SourceGraphic' />
                </filter>
                <filter
                    x='-35.7%'
                    y='-35.9%'
                    width='171.4%'
                    height='171.8%'
                    filterUnits='objectBoundingBox'
                    id='c'
                >
                    <feGaussianBlur stdDeviation='50' in='SourceGraphic' />
                </filter>
                <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='a'>
                    <stop stopColor='#0EA5E9' offset='0%' />
                    <stop stopColor='#BAE6FD' offset='100%' />
                </linearGradient>
            </defs>
            <g
                transform='translate(-199 -204)'
                fill='url(#a)'
                fillRule='nonzero'
            >
                <path
                    d='M496 122.1c-127.025 0-230 102.402-230 228.722 0 126.32 102.975 228.722 230 228.722s230-102.402 230-228.722c-.147-126.259-103.036-228.576-230-228.722Zm110.276 306.628a7.479 7.479 0 0 1-8.006 2.283l-101.772-32.726-101.772 32.726a7.479 7.479 0 0 1-8-2.287 7.306 7.306 0 0 1-.839-8.205l104.07-191.42a7.749 7.749 0 0 1 6.541-3.577 7.749 7.749 0 0 1 6.542 3.576L607.109 420.52a7.306 7.306 0 0 1-.833 8.21Z'
                    filter='url(#b)'
                    transform='translate(199 204)'
                />
                <path
                    d='M332 419.439c115.924.134 209.866 93.553 210 208.833 0 115.336-94.02 208.834-210 208.834s-210-93.498-210-208.834c0-115.335 94.02-208.833 210-208.833Zm.66 89.312c-66.013 0-119.528 53.218-119.528 118.865 0 65.646 53.515 118.864 119.528 118.864 66.014 0 119.529-53.218 119.529-118.864C452.112 562 398.642 508.827 332.66 508.75Z'
                    filter='url(#c)'
                    transform='translate(199 204)'
                />
            </g>
        </svg>
    );
};

export default HeroIllustration;
