import { PowerBIEmbed } from 'powerbi-client-react';
import { Embed, models } from 'powerbi-client';
import './App.css';
import { useEffect, useState } from 'react';
import { usePowerBi } from './hooks/usePowerBi';


//https://app.powerbi.com/reportEmbed?reportId=a56b2f17-ab77-461e-b452-2e4e7afd274b&autoAuth=true&ctid=d09dd9ee-1eda-4e6a-ac6c-0454f9863360

function App() {

  const { handleGetReportData, handleResetReportData, reporData } = usePowerBi()
  const [language, setLanguage] = useState('Bosnian');

  const [report, setReport] = useState<Embed | null>(null);

  useEffect(() => {
    if (report == null) return;
    report.reload()
  }, [report]);

  return (
    <div >
      <div className='buttons' >
        <div>
          <button onClick={async () => await handleGetReportData()}>Cargar Datos del Reporte</button>
        </div>

        <div>
          <button onClick={async () => await handleResetReportData()}>Recargar Reporte</button>
        </div>

        {/* <div>
          <button onClick={() => setLanguage("Galician")}>Galician</button>
        </div>
        <div>
          <button onClick={() => setLanguage("Hindi")}>Hindi</button>
        </div>

        <div>
          <button onClick={() => setLanguage("Maltese")}>Maltese</button>
        </div>

        <div>
          <button onClick={() => setLanguage("Sindhi")}>Sindhi</button>
        </div> */}

      </div>
      <div >

        {reporData && <PowerBIEmbed cssClassName='powerbi-embed'
          embedConfig={
            {
              type: reporData.type, //  'report', // Supported types: report, dashboard, tile, visual, and qna.
              id: reporData.id, //  'd7423a0c-999e-4b92-96fd-62d4ca4abba1',
              accessToken: reporData.accessToken, // "H4sIAAAAAAAEACWUt66sCAJE_-WmrIRvYKUX4L33ZEDjvTej-fe9O5MfVXBUVX_9WOnTT-n3578_D4Z96HbM5mDea0EvYmqg9BSkLJdaHssGstTiIAspC4weeDpYADGJt7YBbURC4O9mKFQ7ohePAHZzgwPRQA8NmslaP_lFBxgVFfnijUGmbZIySjWNt_GeUrdjrebNFFAMhYLroMGoeKNP0fG1NYfeu1o2p95YK8y-pCnK8zCbq_fytmXHGhigW0kZbqx_fyMdEmnC4d6G1ZBRLRobsfNib_nkroIQj9mhoWtDZ71ohF2yXMZPYeQuEXDHQeAP6VV2CYQmhMrpgHJ8oJOE3PiUuCSh-aDQMQAZWG6S3wFFcOZzJQ_p1eXWtMScD2DYJeRifLYWVseGEnbm5Uu9TiQaPLeULVbK0vANt0y45PiAwT9TqiZOZJsgJJz6qSMRkdOhKTK6LMYLczSSeUaCC7S6t-XFC9AR5eOr5o5w7-SS3kHSE0Z01kBCNEckwApIwrkwILqMWzbbN0d7widBDNqPU-ROe1MGwGvIRC8BizLDT6ZmEJI4VCks8IRkRGK1VRYwI0kTAEx9xzDyJOfDLdQEhjlQQ2i6GPfrc1zbbjrsgcODe_no7R-ysCDmWEu1ZijHOlRMh9F7vbZCiL8BLmbG8Z7azOEYRHhdqcNYxW78kQqrziTLKWniGhJTWUJTysaBLWS3uH4F4749oauYGfPXme_ld1LW6waX8FmwkeBVaSrZ4BDpZzCZ4ZQ5cX4_QR9FHR503buU9vz6C-Xr4qFaMhKlKAxabza3NeFzIpaAV7pD6GS-6Tly8_0Mc3q72tKMW8LPheJkafMigsJ2Dk7agrt4Xr7vyQQnkrszG85rPJ0haPspATkoqJcnvyjocLAJ6VHk4VYx3d66vzRFj3yTLOVQ_fnz858fdn3mfVKL53dmgykBXizIyCBBVnie2FmfF033_TidCS-XWEFqMjvXw7MShtYCdHW056CsQrt_gsFO1nZ3fqMnxAdx_XpqCpNluF9HHr5j1NyhJ-w960Li9AVzGr1_W5191LWYIib73ne7wCYv5w30Hbes7ydZIyewOxv9yl6NUeVpP8JCGMdjM_vzkE8Jf3zDNvXmzaLeauxilHYUCrpB3lB-eJUQ7iTAzjOi6EIhG_yBKbfTNKfIwPz8eKeAJDphk7W31ZaE44GJTLTbgvFw3nSfxeriuWIT1p0Dj3EeO6tKDS6zZRcXpEn6eMFFISfgdwm2oYGfOzzVue69wWXFxRCfHqxGBoBYLqf_1fzMdbHKwa_lzgpTAxWbl1fFev9cKrmHsP0P5TbVmO7HWvxiXA1RQkMfo9mk-MuAeFcEEguNd-i9gIS-lXHLVaesK6JF7scI0a5jd7nyWpgIINL1Ji-U0266osoxGthbB-E8UojOHL5mpKzCI_jKvx3INB05af3vG8pHDbjtuJXSmSGy9_2EtZNKIZ6meZlnX9m5rPNDaGlgbhSKw6A7gFzPRI7BGb8XPOmJBPrM-FjufqBi6dOUTz8AcE8C1IuaH6eX-p3MOrTVNuEePD22KVKwexlybWEPaEyr6uXtLQb3VfmWpBVgo25Bkd2S6-7x3QbFoaRl_obqls3VR96jks0pTb0_HSqx8uGKAAqagGz7szL1kNBAY9LzbffMphFCBR3kL9j_X_Pf_wNLTMXuWgYAAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtQy1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZXhwIjoxNzI5NjE5MDU4LCJhbGxvd0FjY2Vzc092ZXJQdWJsaWNJbnRlcm5ldCI6dHJ1ZX0=",
              tokenType: models.TokenType.Embed,
              filters: [
                {

                  $schema: reporData.filter.shema, target: { table: reporData.filter.target.table, column: reporData.filter.target.column },
                  operator: "In",
                  values: [reporData.filter.values],
                  requireSingleSelection: true,
                  filterType: models.FilterType.Basic,
                }
              ],
              settings: {
                panes: {
                  filters: { visible: false },
                }
              }
            }

          }
          getEmbeddedComponent={(embeddedReport) => setReport(embeddedReport)}
        />}
      </div>
    </div>
  )
}

export default App
