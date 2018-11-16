import React from "react";

const RentalInfo = props => {
  return props.lang == "en" ? (
    <div>
      <p className="col-primary">Age Restrictions</p>
      <p>- client’s age 21 and over;</p>
      <p>- at least 2 years of driving experience.</p>

      <p className="col-primary">List of Required Documents</p>
      <p>
        To rent a car, you need to provide a passport and driver's license. To
        conclude a car rental agreement a foreigner must submit a passport and
        the International Driving Permit or a national driving license with the
        name and surname written in Latin letters.
      </p>
      <p>
        You must provide copies of the documents listed upon receipt of the
        vehicle.
      </p>
      <hr />
    </div>
  ) : (
    <div>
      <p className="col-primary">Возрастные ограничения</p>
      <p>- клиент должен быть старше 21 года;</p>
      <p>- водительский стаж должен составлять минимум 2 года.</p>

      <p className="col-primary">Перечень необходимых документов</p>
      <p>
        Для аренды автомобиля гражданину РФ понадобится паспорт и удостоверение
        водителя с правом управления транспортным средством соответствующей
        категории. Для заключения договора аренды иностранец должен предоставить
        национальный паспорт и международные права или водительское
        удостоверение, в котором имя и фамилия указаны латиницей.
      </p>
      <p>
        Вы должны предоставить копии перечисленных документов при получении
        автомобиля
      </p>
      <hr />
    </div>
  );
};

export default RentalInfo;
