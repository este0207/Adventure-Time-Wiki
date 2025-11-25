'use client';

interface LoaderProps {
  isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
  if (!isLoading) return null;

  return (
    <>
      <div id="preloader" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#ffde6708',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}>
        <div className="jake"></div>
      </div>

      <style>{`
        .jake {
          width: 50%;
          height: 50%;
          background: url("/jake.png") center/contain no-repeat;
          animation: stretch 1.2s infinite ease-in-out;
        }

        @keyframes stretch {
          0% { transform: scaleY(1); }
          50% { transform: scaleY(1.5); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </>
  );
}
