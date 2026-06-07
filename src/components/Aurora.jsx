const Aurora = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0d0015]">
            <div className="absolute w-[600px] h-[600px] rounded-full top-[-100px] left-[-100px]" style={{ background: "radial-gradient(circle, #4a0080 0%, transparent 70%)", filter: "blur(80px)", animation: "movement 8s ease-in-out infinite alternate" }} ></div>

            <div className="absolute w-[500px] h-[500px] rounded-full top-[200px] right-[50px]" style={{ background: "radial-gradient(circle, #1a0050 0%, transparent 70%)", filter: "blur(100px)", animation: "movement2 8s ease-in-out infinite alternate" }} ></div>

            <div className="absolute w-[700px] h-[700px] rounded-full bottom-[-200px] left-[30%]" style={{ background: "radial-gradient(circle, #2d0040  0%, transparent 70%)", filter: "blur(120px)", animation: "movement3 8s ease-in-out infinite alternate" }} ></div>
        </div>
    );
};

export default Aurora;