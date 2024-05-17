import React from 'react'
import Link from 'next/link'
import styles from '../styles/healthpage.module.css'

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Wellness Mindset</h1>
        <p>...</p>
      </div>  <br /> <br />

      <div className={styles.listgrid}>
        <div className={styles.griditems}>
          <Link href="/Malaria"><button>
            Malaria
          </button></Link>
        </div>
        <div className={styles.griditems}>
          <Link href="/Acne"><button>
            Acne
          </button></Link>
        </div>
        <div className={styles.griditems}>
          <Link href="/Toothdecay"><button>
            Tooth Decay
          </button></Link>
        </div>
        <div className={styles.griditems}>
          <Link href="Allergies"><button>
            Allergies
          </button></Link>
        </div>
        <div className={styles.griditems}>
          <Link href="CVD"><button>
            CVD
          </button></Link>
        </div>
        <div className={styles.griditems}>
          <Link href="Cancer"><button>
            Cancer
          </button></Link>
        </div>
        <div className={styles.griditems}>
          <Link href="Demantia"><button>
            Demantia
          </button> </Link>
        </div>
        <div className={styles.griditems}>
          <Link href="Diabetis"><button>
            Diabetis
          </button></Link>
        </div>
        <div className={styles.griditems}>
          <Link href="Guthealth"><button>
            Gut Health
          </button></Link>
        </div>
        <div className={styles.griditems}>
          <Link href="Anemia"><button>
            Anemia
          </button></Link>
        </div>
        <div className={styles.griditems}>
          <Link href="HIVAIDS"><button>
            HIV/AIDS
          </button></Link>
        </div>
        <div className={styles.griditems}>
          <Link href="Asthma"><button>
           Asthma
          </button></Link>
        </div>
        <div className={styles.griditems}>
          <Link href="Flu"><button>
            Flu
          </button></Link>
        </div>
        <div className={styles.griditems}>
          <Link href="Mentalhealth"><button>
            Mental Health
          </button></Link>
        </div>
        <div className={styles.griditems}>
          <Link href="Pneumonia"><button>
            Pneumonia
          </button></Link>
        </div>
        <div className={styles.griditems}>
          <Link href="Hairloss"><button>
            Hair Loss
          </button></Link>
        </div>
        <div className={styles.griditems}>
          <Link href="Hepatitis"><button>
            Hepatitis
          </button></Link>
        </div>
        <div className={styles.griditems}>
          <Link href="Kidneystone"><button>
            Kidney Stone
          </button></Link>
        </div>
        <div className={styles.griditems}>
          <Link href="Cold"><button>
            Cold
          </button></Link>
        </div>
        <div className={styles.griditems}>
          <Link href="Hypertension"><button>
            Hypertension
          </button></Link>
        </div>
        <div className={styles.griditems}>
          <Link href="Osteoporosis"><button>
            Osteoporosis
          </button></Link>
        </div>
        <div className={styles.griditems}>
          <Link href="Stroke"><button>
            Stroke
          </button></Link>
        </div>
        <div className={styles.griditems}>
          <Link href="Vision"><button>
            Vision
          </button></Link>

        </div>
        <div className={styles.griditems}>
          <Link href="Obesity"><button>
            Obesity
          </button></Link>
        </div>

        
      </div>
    </div>
  )
}

export default page