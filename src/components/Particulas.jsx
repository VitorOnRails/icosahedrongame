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
                
                const raio = particula.tamanho;

                for (let dx = -raio; dx <= raio; dx++) {
                for (let dy = -raio; dy <= raio; dy++) {
                    if (dx * dx + dy * dy <= raio * raio) {
                        context.fillStyle = "#80ff80";
                        context.fillRect(particula.x + dx, particula.y + dy, 1, 1);
                    };
                };
                };
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