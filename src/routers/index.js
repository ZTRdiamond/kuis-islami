import { Router } from "express";
const router = Router();

router.get("/", async(req, res) => {
  res.status(200).json({
    "message": "بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيْمِ",
    "greeting": "Assalamu'alaikum warahmatullahi wabarakatuh",
    "welcome": "Selamat datang di API Kuis Islami! Semoga Allah SWT senantiasa memberikan ilmu yang bermanfaat dan keberkahan dalam setiap langkah kita.",
    "reminder": "Rasulullah ﷺ bersabda: 'Barang siapa menempuh jalan untuk mencari ilmu, maka Allah akan memudahkan baginya jalan menuju surga.' (HR. Muslim)",
    "end": "Selamat menggunakan REST API kuis islami ini, terimakasih :D"
  })
})

export default router;