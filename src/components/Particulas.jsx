import { useEffect, useRef } from "react";


const Particulas = () => {

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particulas = [];

        for (let i = 0; i < 80; i++) {
            particulas.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                tamanho: Math.random() * 3 + 1,
                velocidadeX: (Math.random() - 0.5) * 0.5,
                velocidadeY: (Math.random() - 0.5) * 0.5
            });
        };

        const animar = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            particulas.forEach(particula => {
                particula.x += particula.velocidadeX;
                particula.y += particula.velocidadeY;
                context.beginPath();
                context.arc(particula.x, particula.y, particula.tamanho, 0, Math.PI * 2);
                context.fillStyle = "#00ff00";
                context.fill();
            });
            requestAnimationFrame(animar);
        };
        animar();

        const windowResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        window.addEventListener("resize", windowResize);

        return () => {
            window.removeEventListener("resize", windowResize);
        };
    }, []);

    return (
        <canvas ref={canvasRef} className="fixed inset-0 -z-5" />
    );
};

export default Particulas;