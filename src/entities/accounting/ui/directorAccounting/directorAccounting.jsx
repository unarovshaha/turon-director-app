import React from 'react';
import cls from './directorAccounting.module.sass'
import {EditableCard} from "shared/ui/editableCard/index.js";

export const DirectorAccounting = ({data}) => {

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("uz-UZ", {
            style: "currency",
            currency: "UZS",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount)
    }

    const calculateCategoryTotal = (category) => {
        return category.list.reduce((total, branch) => {
            return total + branch.list.reduce((branchTotal, item) => branchTotal + item.summa, 0)
        }, 0)
    }
    const getCategoryColor = (type, isStyle = false) => {
        switch (type) {
            case "studentsPayments":
                return {backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0"}

            case "teachersSalary":
                return {backgroundColor: "#eff6ff", border: " 1px solid #bfdbfe"}

            case "employeesSalary":
                return {backgroundColor: "#f5f3ff", border: " 1px solid #ddd6fe"}

            case "overhead":
                return {backgroundColor: "#fff7ed", border: " 1px solid #fed7aa"}

            case "capital":
                return {backgroundColor: "#fef2f2", border: " 1px solid #fecaca"}

            default:
                return {backgroundColor: "#f9fafb", border: "1px solid #e5e7eb"}

        }
    }

    const getCategoryIcon = (type) => {
        switch (type) {
            case "studentsPayments":
                return <i style={{color: 'black'}} className="fa-solid fa-graduation-cap"></i>
            case "teachersSalary":
                return <i style={{color: 'black'}} className="fa-solid fa-users"></i>
            case "employeesSalary":
                return <i style={{color: 'black'}} className="fa-solid fa-user-check"></i>
            case "overhead":
                return <i style={{color: 'black'}} className="fa-solid fa-building-shield"></i>
            case "capital":
                return <i style={{color: 'black'}} className="fa-solid fa-arrow-trend-up"></i>
            default:
                return <i style={{color: 'black'}} className="fa-solid fa-building-shield"></i>
        }
    }


    const renderCards = () => {
        return data?.map((category, branchIndex) => {
            return (
                <EditableCard style={getCategoryColor(category.type, true)} extraClass={cls.main__card} titleType={""}>
                    <div className={cls.main__card__header}>
                    <span className={cls.main__card__header__span}>
                        {getCategoryIcon(category.type)}
                        <h2>{category.name}</h2>
                    </span>
                        <span className={cls.main__card__header__content}>
                        <h3>Total: {formatCurrency(calculateCategoryTotal(category))}</h3>
                    </span>
                    </div>
                    <div className={cls.main__card__content}>
                        {
                            category.list.map((branch, branchIndex) => (
                                <EditableCard extraClass={cls.main__card__content__box} titleType={""}>
                                    <div className={cls.main__card__content__box__header}>
                                        <h2>{branch.name}</h2>
                                        <span>
                                            {branch.list[0]?.count || 0} items
                                        </span>
                                    </div>
                                    <div className={cls.main__card__content__box__inner}>
                                        {
                                            branch.list.map((item) => (
                                                <div className={cls.main__card__content__box__inner__sum}>
                                                    <h3>Amount</h3>
                                                    <h4 style={item.summa === 0 ? {color: "#ccc"} : {color: "#39ae60"}}>{formatCurrency(item.summa)}</h4>
                                                    {
                                                        item.summa === 0 ? <span
                                                            className={cls.main__card__content__box__inner__sum__handler}>
                                                        Ma'lumot topilmadi
                                                    </span> : null
                                                    }

                                                </div>
                                            ))
                                        }
                                    </div>
                                </EditableCard>
                            ))
                        }
                    </div>
                </EditableCard>)
        })
    }


    return (
        <div className={cls.main}>
            <div className={cls.main__header}>
                <h1 className={cls.main__header__article}>Moliyaviy panel</h1>
                <p className={cls.main__header__para}>Barcha filiallar bo'yicha to'lovlar va xarajatlarning umumiy
                    ko'rinishi</p>
            </div>

            {renderCards()}
            <EditableCard extraClass={cls.main__summary} titleType={""}>
                <h1>Moliyaviy xulosa</h1>
                <div className={cls.main__summary__arounder}>
                    {data?.map((category, branchIndex) => (
                        <EditableCard extraClass={cls.main__summary__arounder__box} titleType={""}>
                        <span className={cls.main__summary__arounder__box__header}>
                            {getCategoryIcon(category.type)}
                            <h2>{category.name}</h2>
                        </span>
                            <h3>{formatCurrency(calculateCategoryTotal(category))}</h3>
                        </EditableCard>
                    ))}
                </div>

            </EditableCard>
        </div>);
};

