import React from 'react';

export const Modal = ({ openText, modalTitle, modalText, modalClose }) => {
    return (
        <div>
            <label htmlFor="my-modal-6" className="btn btn-ghost border-white z-10 w-[13rem] sm:w-auto">
                {openText}
            </label>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box bg-primary">
                    <h3 className="font-bold text-lg">{modalTitle}</h3>
                    <p className="py-4">{modalText}</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn btn-ghost border-white">
                            {modalClose}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};
