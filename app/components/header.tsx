export default function Header() {
    return (
        <div className="header mt-8 mb-10 flex justify-center z-1 p-0"
        style={{
                transform: 'translateY(-200%)',
                animation: 'slideDown 0.6s ease 0.5s forwards, fadeOut 0.3s ease 1s forwards'
        }}
        >
                <img src="/header.png" alt="header" className="w-150 "/>
        </div>
    );
}