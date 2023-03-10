// stores/counter.js
import { acceptHMRUpdate, defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      menu:false,
      data: [
        {
          title: "วัดสังกัสรัตนคีรี",
          description:
            "อีกหนึ่งวัดใน ที่เที่ยวอุทัยธานี วัดสวยใกล้กรุงเทพ เด่นสง่า ทิวทัศน์ดีเยี่ยม อย่าง วัดสังกัสรัตนคีรี จุดชมวิวเมืองภาคกลาง ที่มียอดเขากลางเมือง สามารถขึ้นไปดูจุดสูงสุดของเมืองได้ เมื่อขึ้นไปแล้วจะทำให้เราว้าวไปกับทิวทัศน์รอบเมืองที่สวยไม่เหมือนใคร",
          img: "/img2.jpeg",
        },
        {
          title: "บ้านไร่ปลายนา",
          description: "ร้านกาแฟวิวสวยสุดปังแห่งนี้มีชื่อว่า “บ้านไร่ปลายนา” บรรยากาศของที่นี่ชิล ๆค่ะ ตั้งอยู่ที่ อำเภอทัพทัน ที่เที่ยวอุทัยธานี ตกแต่งเรียบง่ายตามสไตล์บ้านทุ่ง มีสะพานไม้ไผ่ทอดยาว และมุมเก๋ๆ ให้ถ่ายรูปมากมาย ภายใน มีร้านกาแฟเล็กๆ บริการด้วยค่ะ และมีเครื่องดื่มอื่นๆ เช่น ชาเย็น ชาเขียว โกโก้ ชามะนาว ด้วยค่ะ เพิ่มความหวานด้วยเมนูของว่างอย่าง ทองหยิบ ทองยอด ขนมสอดไส้ ก็มีค่ะ ในช่วงวันหยุดเสาร์อาทิตย์ก็จะมีข้าวมันไก่ฝีมือคุณยาย บริการด้วยค่ะบอกเลยว่าอร่อยสุดๆ",
          img: "/img3.jpeg",
        },
        {
          title: "จุดชมวิวบ้านชายเขา",
          description: "บ้านชายเขา อำเภอลานสัก จังหวัดอุทัยธานี สวิตเซอร์แลนด์เมืองไทยนี่เองคร้า เพราะที่นี่เป็นจุดชมวิวที่ได้ฟิวสวิตจริงๆค่ะ ยิ่งเข้าช่วงหน้าหนาวนี่เตรียมตัวเลยจ๊ะ ถ่ายรูปได้ฟิวสวิตมากๆ บรรยากาศโดยรอบเป็นหุบเขาสีเขียวขจี ลมพัดชิวมากก และที่ดีไปกว่านั้นยังมีร้านอาหารเปิดให้บริการด้วยจ้า เป็นร้านอาหารที่เปิดเป็นซุ้มให้นั่งทานอาหารแบบดื่มด่ำกับธรรมชาติแบบใกล้ชิดไปเลยจ้าาา ที่เที่ยวอุทัยธานี ที่นี่ต้องแวะมาแล้วว",
          img: "/img4.jpeg",
        },
        {
          title: "ยอดเขาสะแกกรัง",
          description: "วัดเขาสะแกกรัง เป็นวัดอันดับต้นๆที่ชาวอุทัยธานีให้ความเคารพนับถือ เพราะเป็นวัดที่อยู่คู่บ้านคู่เมืองมาตั้งแต่ครั้งสมัยกรุงรัตนโกสินทร์ นักท่องเที่ยวที่แวะเข้ามากราบไว้ขอพรแล้วยังสามารถขึ้นยอดเขาสะแกกรังไปชมศาสนสถานพระมณฑปทรงไทยที่งดงาม โดยด้านบนยังสามารถมองเห็นวิวของเมืองอุทัยได้แบบมุมสูงที่สวยงาม ยอดเขาสะแกกรังเป็นสถานที่ศักดิ์สิทธิ์ จะมีพิธีกรรมอันสำคัญที่ชาวเมืองอุทัยธานีให้ความสำคัญเป็นอย่างมาก ประเพณี ตักบาตรเทโว โดยจำลองเหตุการณ์คล้ายในพุทธ ประวัติ มีพระสงฆ์เดินลงบันไดจากยอดเขาสะแกกรัง เป็นภาพที่สวยงามมากๆ มีพุทธศาสนิกชนและนักท่องเที่ยวจำนวนมากทั้งชาวอุทัยธานีและนักท่อวเที่ยว ต่างเดินทางมาเที่ยวชม",
          img: "/img5.jpeg",
        }, {
          title: "แพบ้านบ้าน โฮมสเตย์",
          description: "แพบ้านบ้าน ที่พักกลางแม่น้ำสะแกกรัง จ.อุทัยธานี ที่พักสุดชิลล์เก๋สุดในย่านเมืองอุทัยธานี บอกได้เลยว่าที่พักที่นี่ธรรมชาติมากๆ ใกล้ชิดวิถีชีวิตสุดแสนสโลว์ไลฟ์ของคนในเมืองอุทัยธานี ที่เที่ยวอุทัยธานี ที่มาพักแล้วจะติดใจ",
          img: "/img6.jpeg",
        },
        {
          title: "หุบป่าตาด",
          description: "อีกหนึ่ง ที่เที่ยวอุทัยธานี ที่ใครที่มา เที่ยวอุทัยธานี ต้องมาให้ได้!!! เพราะที่นี่นั้นมหัศจรรย์เต็มไปด้วยพันธุ์ไม้หายากหลากหลายสายพันธุ์ ผืนป่าที่เต็มไปด้วยต้นตาดและพืชพันธุ์โบราณแปลกตาชิคมากๆ ระยะทางเดินชมธรรมชาติ ไป-กลับ 700 เมตร ใช้เวลาชมประมาณครึ่งชั่วโมง ทางเดินจะเดิมไม่ยาก เดินง่าย เดินชมธรรมชาติพันธุ์ไม้สุดแปลกตาและโถงถ้ำที่มีหินหงอกหินย้อยสวยงาม ถ้ำหุบป่าตาดนั้นค้นพบโดยพระครูสันติธรรมโกศลนั่นเองค่ะ อ่านมาถึงตรงนี้ แอดคิดว่าหลาย ๆ คน คงอยากรู้ว่าจังหวัดอื่น ๆ มีที่เที่ยวคล้ายๆ กับที่นี่ไหม ลองไป ที่เที่ยวตาก ดูนะคะ อเมซิ่งสุด ๆ เหมือนกันค่ะ",
          img: "/img7.jpeg",
        },
        {
          title: "วัดจันทาราม หรือ วัดท่าซุง",
          description: "วัดท่าซุง  ปราสาททองคำนี เป็นจุดไฮไลท์สุดตระกาลตาของที่นี่ ตกแต่งด้วยทองคำศิลปะไทยแบบประณีตงดงามมากๆ เป็นวัดเก่าแก่ตั้งแต่สมัยกรุงศรีอยุธยา ปัจจุบันสำนักพระราชวังได้ตั้งชื่อปราสาททองคำใหม่ว่า “ปราสาททองกาญจนาภิเษก” แด่พระบาทสมเด็จพระเจ้าอยู่หัว ในวาระที่ทรงเสวยราชย์เป็นปีที่ 50 สามารถนั่งรถรางของทางวัดเที่ยวชมในราคาย่อมเยา โดยเปิดมห้เข้าชมตามรอบ มีเวลาเปิด-ปิด ที่แบ่งเป็นช่วงเช้า-บ่าย ไม่พอยังสามารถนั่งเรือชมบริเวณท่าน้ำวัดท่าซุงได้อีกด้วยจ้าา",
          img: "/img8.jpeg",
        },{
          title: "ฝายกั้นน้ำปางสวรรค์",
          description: "ฝายกั้นน้ำปางสวรรค์ ที่นี่สวยงามปางสวรรค์วิมานจริงๆ ฝายกั้นน้ำในชุมชนอำเภอบ้านไร่ จังหวัดอุทัยธานี ไม่ไกลจาก ที่เที่ยวสุพรรณบุรี เป็นฝายกักเก็บน้ำและชะลอน้ำของฝายนั่นเองค่ะ ในช่วงฤดูฝนที่นี่จะเป็นแหล่งท่องเที่ยวที่น่าสนใจมากๆ เพราะเป็นน้ำตกของฝายสุด Unseen ที่สวยงามอีกแบบของธรรมชาติที่มนุษย์สร้างขึ้น เป็นความสวยงามที่แปลกใหม่ไว้ต้อนรับเพื่อนๆ เลยจ้าาา",
          img: "/img9.jpeg",
        }
      ],
    };
  },
});
