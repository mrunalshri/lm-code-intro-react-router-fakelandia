import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMisdemeanourContext } from "../misdemeanour_context";
import { Misdemeanour, MISDEMEANOURS } from "../types/misdemeanours.types";
import { ConfessionFormData } from "../types/types";
import { postData } from "../utils";
import {
  hasValidFormData,
  validateConfession,
  validateReason,
  validateSubject,
} from "../validation";
import Dropdown from "./Dropdown";
import ErrorMessage from "./ErrorMessage";

const Confession: React.FC = () => {
  const [formData, setFormData] = useState<ConfessionFormData>({
    reason: null,
    subject: null,
    details: null,
  });

  const [responseError, setResponseError] = useState("");
  const { misdemeanours, updateMisdemeanours } = useMisdemeanourContext();
  const navigate = useNavigate();

  const submitFormData = async () => {
    const response = await postData(formData);
    if (response.success && !response.justTalked) {
      const currentDate = new Date().toLocaleString("en-US").split(",")[0];
      setResponseError("");
      const newMisdemeanour = {
        citizenId: 12345,
        date: currentDate,
        misdemeanour: formData.reason,
      } as Misdemeanour;
      updateMisdemeanours([...misdemeanours, newMisdemeanour]);
      navigate("/misdemenour");
    } else {
      setResponseError(response.message);
    }
  };

  const [isValidForm, setIsValidForm] = useState<boolean>(false);

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, reason: value });
  };

  useEffect(() => {
    const isFormValid = hasValidFormData(formData);
    setIsValidForm(isFormValid);
  }, [formData]);

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form name="confession">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <ErrorMessage errorMessage={responseError} />
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                      <label
                        htmlFor="subject"
                        className=" text-sm font-medium leading-6 text-gray-900"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        autoComplete="subject"
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            subject: e.target.value,
                          });
                        }}
                        onBlur={(e) => {
                          setFormData({
                            ...formData,
                            subject: e.target.value,
                          });
                        }}
                        value={formData.subject ? formData.subject : ""}
                        className="mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {formData.subject !== null &&
                        !validateSubject(formData.subject) && (
                          <ErrorMessage errorMessage="Subject should be at least 3 to 23 characters" />
                        )}
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="reason-dropdown"
                        className="text-sm font-medium leading-6 text-gray-900"
                      >
                        Reason for contact
                      </label>

                      <Dropdown
                        selectText="Select"
                        name="reason-dropdown"
                        options={[...MISDEMEANOURS, "I just want to talk"].map(
                          (misdemeanour) => ({
                            key: misdemeanour,
                            value: misdemeanour,
                          })
                        )}
                        addClass={
                          "mt-2 rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        }
                        onChangeHandler={handleSelectChange}
                        onBlurHandler={(value) => {
                          setFormData({
                            ...formData,
                            reason: value,
                          });
                        }}
                        value={formData.reason ? formData.reason : ""}
                      />
                      {formData.reason !== null &&
                        !validateReason(formData.reason) && (
                          <ErrorMessage errorMessage="Please select reason" />
                        )}
                    </div>

                    <div className="col-span-6">
                      <div className="mt-2">
                        <textarea
                          id="reason"
                          name="reason"
                          rows={3}
                          className="mt-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                          placeholder="you@example.com"
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              details: e.target.value,
                            });
                          }}
                          onBlur={(e) => {
                            setFormData({
                              ...formData,
                              details: e.target.value,
                            });
                          }}
                          value={formData.details ? formData.details : ""}
                        ></textarea>
                        {formData.details !== null &&
                          !validateConfession(formData.details) && (
                            <ErrorMessage errorMessage="Subject should be at least 10 to 153 characters" />
                          )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6">
                  <button
                    disabled={!isValidForm}
                    type="button"
                    onClick={submitFormData}
                    className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Confess
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confession;
