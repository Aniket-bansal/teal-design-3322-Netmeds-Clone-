import { Box, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const container={
    
    height:"auto",
    width:"80%",
    margin:"auto",
    marginBottom:"40px"
}
const slider={
    height:"270px"
}
const itemBox={
    width:"100%",
    height:"200px",
    borderRadius:"7px"
}
function HealthLibrary() {
  return (
    <Box style={container}>
        <Box style={slider}>
            <Box  h="150px" backgroundColor="#EE4280">
                <Heading textAlign="left" pl="10px" color="#fff" fontSize="22px">Healthy Library</Heading>
            </Box>
            <Box  w="90%" margin="auto" mt="-70px" h="230px">
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide>
                <Box style={itemBox}>
                 <Img  src="https://www.netmeds.com/images/cms/magefan_blog/nmslite/1658233510_Ayurvedic-Indications_480x180.jpg" />
                 <Heading mt="12px" textAlign="left" fontSize="17px">Prabhakar Vati: Uses, Health Benefits, Ayurvedic </Heading>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box style={itemBox}>
                <Img  src="https://www.netmeds.com/images/cms/magefan_blog/nmslite/1658233877_Polyhydroxy-acids_480x180.jpg" />
                 <Heading mt="12px" textAlign="left" fontSize="17px">What are Polyhydroxy(PHAs)</Heading>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box style={itemBox}>
                <Img  src="https://www.netmeds.com/images/cms/magefan_blog/nmslite/1658234026_Radionuclide-Scintigraphy_480x180.jpg" />
                 <Heading mt="12px" textAlign="left" fontSize="17px">Radionuclide Scintigraphy</Heading>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box style={itemBox}>
                <Img  src="https://www.netmeds.com/images/cms/magefan_blog/nmslite/1658137111_Nordic-Diet_480x180.jpg" />
                 <Heading mt="12px" textAlign="left" fontSize="17px">What is Nordic Diets?</Heading>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box style={itemBox}>
                <Img  src="https://www.netmeds.com/images/cms/magefan_blog/nmslite/1658139045_Red-Sandalwood_480x180.jpg" />
                 <Heading mt="12px" textAlign="left" fontSize="17px">Red Sandlwood : Uses, Health Benefits</Heading>
                </Box>
            </SwiperSlide>
      
            </Swiper>

            </Box>
        </Box>
        {/* Summary */}
        <Box w="90%" margin="auto" mt="50px" h="1400px">
         <Text textAlign="left">
         <strong>Popular Wellness Products: </strong>Dabur Shilajit Gold Capsule 20's | Dabur Chyawanprash Awaleha 500 gm | Pankajakasthuri Breathe Easy Granules 400 gm | Nestle Peptamen Peptide Based Diet Powder - Vanilla Flavour 400 gm (Tin) | Pentasure 2.0 Vanilla Powder 1 kg | Scalpe Plus Anti Dandruff Shampoo 75 ml | Nestle Nan Excella Pro 1 (Upto 6 Months) Powder 400 gm (Refill Pack) | Accu-Chek Active Test Strips 50's | D Protin Chocolate Powder 500 gm | Climax Spray for Men 12 gm <br/>
         <strong>Top-Selling Health Packages:</strong> AAROGYAM C | Netmed Health Pack | Aarogyam 1.3 | Netmeds Swasthya | Diabetic Checkup | Aarogyam 1.7 |          Basic Allergy Package | Aarogyam X | Advance Heart Care | Netmeds Swasthya Plus <br/>
         <strong>Top-Selling Lab Tests:</strong> Complete Blood Count (CBC)/Complete Hemogram | LIVER FUNCTION TEST | Blood Glucose Fasting (FBS) | THYROID           PROFILE -TOTAL(T3,T4&TSH) | Fever Profile | Urine Routine & Microscopy | Hemoglobin A1C (HbA1c) | 25-OH Vitamin D (TOTAL)/Vitamin D         Total 25 Hydroxy | Uric Acid | Maternal screen-1st Trimester Dual Marker test <br/>
         <strong>Top-Selling Radiology Tests:</strong> Ultrasound Whole Abdomen | MRI Scan Brain | CT Scan Brain | ECHO | X Ray Chest PA View | PET Scan | ECG |          Ultrasound Pelvis | 3T MRI Scan Brain | CT Scan Chest <br/>
         <strong>Most Viewed Health Articles:</strong>Chandraprabha Vati - Uses, Functions And Therapeutic Benefits | Amla: Benefits, Uses For Hair and Health            Conditions, Supplements And Recipes | Amazing Benefits Of Chyawanprash For Bolstering Immunity And Vitality | Arogyavardhini Vati -         Uses, Functions And Therapeutic Benefits | Amazing Benefits Of Betel Leaves Nobody Told You
         </Text>
         <br/>
         <Box  h="1138px" textAlign="left">
           <Text fontWeight="600" fontSize="16px">Welcome to Netmeds.com! India's Leading Online Pharmacy!</Text>
           <Text fontSize="14px">With a dynamic legacy of over 100 years in the pharma business, it comes as no surprise that Netmeds.com is the first choice of over 4 million+ satisfied customers when it comes to an online pharmacy in India. Netmeds.com has a pan India presence as we deliver health care essentials to every state in the country. We take your health seriously at Netmeds.com. Be it purchasing medicines online, lab tests or online doctor consultations, we've got it all covered for our customers!
           </Text>
           <Text fontWeight="600" fontSize="16px">Take the Worry Out of Buying Medicines! Purchase Medicines Online Anytime, Anywhere!</Text>
           <Text fontSize="14px">Get everything you need at Netmeds.com to take care of your health right from high-quality, affordable, authentic prescription medicines, Over-The-Counter pharmaceuticals products to general health care products, Ayurveda, Unani and Homeopathy medicines.<br/>

            Buy medicines online at Netmeds.com from the comfort of your home and we will take care of the rest! We will ensure that the             life-saving drugs reach your doorstep without a hitch. Do away with the hassle of driving to the medical store, waiting in line, or             even remembering your refills! Netmed.com will sort out those problems for you effectively so that you can lead a healthy and full life!<br/>

            Ordering medicines online at Netmeds.com is just a simple 4 step process. Browse through our wide range of health care products, add them to your cart, uploading your prescription (if required) and proceed to checkout!<br/>
            With Netmed.com, rest assured that your health will be in safe hands!
          </Text>
          <Text fontWeight="600" fontSize="16px">Buying medicines online</Text>
          <Text fontSize="14px">At Netmeds.com, we ensure that you get high-quality life-saving medicines are delivered to you on time. Order medicines online at your convenience from across the country. We also deliver Ayurvedic, Homeopathic, Unani and Over-The-Counter (OTC) products to over 19,000 pin codes across the country!</Text>
          <br/>

          <Text fontWeight="600" fontSize="16px">Medicine Subscription</Text>
          <Text fontSize="14px">Remembering to refilling medicines month on month to address chronic conditions can be a hassle. Netmeds' subscription service will ensure that you never run out of these vital medicines. Just set it up and your medicines will get refilled and delivered automatically every month to your doorstep!</Text>
          <br/>

          <Text fontWeight="600" fontSize="16px">Netmeds First</Text>
          <Text fontSize="14px">Netmeds First is our loyalty programme which puts you and your health First! First members can get an extra 2.5% NMS Cashback (up to INR 100 per order) on prescription medication ordered using the membership. Members are also eligible for free delivery, priority processing, and free online doctor consultations!</Text>
          <br/>

          <Text fontWeight="600" fontSize="16px">Diagnostics</Text>
          <Text fontSize="14px">Do you find yourself constantly putting off getting your lab tests done because it's inconvenient to schedule them or because they are expensive? Visit Netmed.com to book lab tests and health checkup packages online from well-reputed, certified diagnostic labs according to your convenience and at affordable rates. We will also make your lab reports available online for easy access.</Text>
          <br/>

          <Text fontWeight="600" fontSize="16px">Online Doctor Consultation</Text>
          <Text fontSize="14px">Are the long queues at hospitals and clinics putting you off? At Netmeds.com, we realize that your time and health are precious. Consult with top-notch doctors online 24/7 at your convenience through our online doctor consultation service!</Text>

          <br/>
          
          <Text fontWeight="600" fontSize="16px">Why Choose Netmeds?</Text>
          <Text fontSize="14px">
            <li>100+ years of experience in the pharma sector</li>
            <li>Vital medicines delivered across the country</li>
            <li>Trust of more than 4 million+ loyal customers</li>
            <li>Our team is made up of highly experienced pharmacists & healthcare professionals</li>
            <li>A wide array of healthcare services available for your convenience</li>
            <li>We stock only genuine medicines & healthcare products</li>
          </Text>

          <br/>
          <Text fontWeight="600" fontSize="16px">Our Awards and Recognition</Text>
          <Text fontSize="14px">
          We at Netmeds.com know how crucial medicine is to treating health conditions and we are extremely proud to be at the forefront of the online medicine industry. Netmeds.com offers its customers a reliable online pharmacy service and as a testament to our commitment, we are regularly recognized and honoured with awards. We are pleased to highlight some of our awards here and we aim to continue adding more feathers to our cap! <br/><br/>

          We have bagged the 'Health Tech Start-Up of the Year' at the NDTV Unicorn Awards 2016. We are also proud that we have been selected as Asia's Most Promising Brand 2018' by Int+ WCRC International. <br/><br/>

          We have been named as the 'Best Digital Healthcare Start-up' by ET Now World Health and Wellness Congress in 2019. We were also recognized by ET Now World Health and Wellness Congress as the 'Digital Healthcare Company of the year' in 2019.
          </Text>
         </Box>
        </Box>
    </Box>
  )
}

export default HealthLibrary