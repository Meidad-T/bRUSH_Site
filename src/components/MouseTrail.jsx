import React, { useEffect, useRef } from 'react';

const MouseTrail = () => {
    const canvasRef = useRef(null);
    const pointsRef = useRef([]);
    const requestRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas size to full screen
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Track mouse movement
        const handleMouseMove = (e) => {
            pointsRef.current.push({
                x: e.clientX,
                y: e.clientY,
                age: 0
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Filter out old points
            pointsRef.current = pointsRef.current.filter(point => point.age < 50);

            if (pointsRef.current.length > 1) {
                ctx.beginPath();
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';

                // Draw the trail
                for (let i = 0; i < pointsRef.current.length - 1; i++) {
                    const point = pointsRef.current[i];
                    const nextPoint = pointsRef.current[i + 1];

                    point.age += 1;

                    const opacity = 1 - (point.age / 50);
                    ctx.strokeStyle = `rgba(43, 43, 43, ${opacity})`; // Graphite color
                    ctx.lineWidth = 3 * opacity; // Tapering width

                    ctx.beginPath();
                    ctx.moveTo(point.x, point.y);
                    ctx.lineTo(nextPoint.x, nextPoint.y);
                    ctx.stroke();
                }
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 9999, // On top of everything
            }}
        />
    );
};

export default MouseTrail;
