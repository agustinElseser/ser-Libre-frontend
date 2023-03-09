import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Inicio from "../page/Inicio";

import ATuRitmoUno from "../page/Online/Programas/ATuRitmoUno";
import ATuRitmoDos from "../page/Online/Programas/ATuRitmoDos";
import ATuRitmoTres from "../page/Online/Programas/ATuRitmoTres";
import ArmonizacionEnergetica from "../page/Online/ArmonizacionEnergetica";
import Sesion from "../page/Online/Sesion";
import Acompañamiento from "../page/Online/Acompañamiento";
import CacaoLovers from "../page/Cacao/CacaoLovers";
import Productos from "../page/Cacao/Productos";
import CeremoniaGrupal from "../page/Presencial/CeremoniaGrupal";
import CeremoniaPersonal from "../page/Presencial/CeremoniaPersonal";
import { Membresia } from "../page/Online/Membresia";
import { ModalBuy } from "../componentes/ModalBuy";
import { MensajeCompra } from "../componentes/MensajeCompra";
import { Luciana } from "../page/Luciana/Luciana";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="aturitmouno" element={<ATuRitmoUno />} />
        <Route path="aturitmodos" element={<ATuRitmoDos />} />
        <Route path="aturitmotres" element={<ATuRitmoTres />} />
        <Route path="membresia" element={<Membresia />} />
        <Route
          path="armonizacionenergetica"
          element={<ArmonizacionEnergetica />}
        />
        <Route path="sesion" element={<Sesion />} />
        <Route path="acompañamiento" element={<Acompañamiento />} />
        <Route path="cacaolovers" element={<CacaoLovers />} />
        <Route path="productos" element={<Productos />} />
        <Route path="ceremonia-grupal" element={<CeremoniaGrupal />} />
        <Route path="ceremonia-personal" element={<CeremoniaPersonal />} />
        <Route path="luciana" element={<Luciana />} />
        <Route path="comprar" element={<ModalBuy />} />
        <Route path="comprar/finalizar" element={<MensajeCompra />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
