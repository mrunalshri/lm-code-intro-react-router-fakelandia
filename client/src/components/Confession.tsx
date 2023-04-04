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
      <section className="bg-white dark:bg-gray-900">
        <div className="py-4 lg:py-8 px-4 mx-auto max-w-screen-md">
          <h4 className="mb-2 text-base tracking-tight font-bold text-center text-gray-900 dark:text-white">
            Contact Us
          </h4>
          <p className="mb-1 lg:mb-2 font-light text-center text-gray-700 dark:text-gray-400 sm:text-base">
            It's very difficult to catch people committing misdemeanour so we
            appreciate it when citizens confess to us directly.
          </p>
          <p className="mb-1 lg:mb-2 font-light text-center text-gray-700 dark:text-gray-400 sm:text-base pb-6">
            However, if you're just having a hard day and need to vent then
            you're welcome to contact us here too. Up to you!
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                aria-label="subject"
                autoComplete="subject"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    subject: e.target.value,
                  });
                }}
                onBlur={(e) => {
                  console.log("onblur==>");
                  setFormData({
                    ...formData,
                    subject: e.target.value,
                  });
                }}
                value={formData.subject ? formData.subject : ""}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              />

              {formData.subject !== null &&
                !validateSubject(formData.subject) && (
                  <ErrorMessage errorMessage="Subject should be at least 3 to 50 characters" />
                )}
            </div>
            <div>
              <label
                htmlFor="reason-dropdown"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
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
                  "block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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

              {formData.reason !== null && !validateReason(formData.reason) && (
                <ErrorMessage errorMessage="Please select reason" />
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="reason"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your reason
              </label>
              <textarea
                id="reason"
                name="reason"
                aria-label="reason"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="please write your reason here"
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
            <button
              disabled={!isValidForm}
              type="button"
              onClick={submitFormData}
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-cyan-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Confess
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Confession;
