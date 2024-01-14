import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
};

function MostrarInfoIndex({d}) {
    
    const control = useAnimation()
    const [ref,inView] = useInView()

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
      }, [control, inView]);

    return (
    <motion.div 
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
    >
    <div className="bg-white m-3 rounded-2xl p-3 tarjeta mostrarInfo md:max-h-80">
        <div className="flex mb-2">
            <p className="basis-4/6">
                {
                    d.caracteristicas.titulo
                }
            </p>
            <p className="basis-1/6">
                {
                    d.caracteristicas.tipo
                }  
            </p>
            <p className="basis-1/6">
                {
                    d.origen.libro
                }
            </p>
        </div>
        <div className="flex">
            <div className="basis-2/3">
                <p className="max-w-lg">
                    {
                        d.caracteristicas.texto
                    }
                </p>
            </div>
            <img src={d.caracteristicas.url_imagen_texto} className="basis-1/3" alt="NADA"/>
        </div>
        <div className="flex">
                <p className="basis-5/6">
                    {
                        d.origen.autor
                    }
                </p>
                <p className="basis-1/6 ">
                    {
                        d.origen.pagina
                    }
                </p>
        </div>
    </div>
    </motion.div>
  )
}

export default MostrarInfoIndex