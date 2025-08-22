import React, {useState} from 'react';
import cls from './directorAccounting.module.sass'
import {EditableCard} from "shared/ui/editableCard/index.js";
import {Button} from "shared/ui/button/index.js";
import {
    TrendingUp,
    TrendingDown,
    Users,
    Building2,
    Calculator,
    DollarSign,
    School
} from 'lucide-react'

export const DirectorAccounting = ({data}) => {

    const [active, setActive] = useState(true);


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

    console.log(active, 'active')


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

    const renderDebitSide = () => {
        const totalIncome = data
            ?.filter(category => category.type === "studentsPayments")
            .reduce((sum, category) => sum + calculateCategoryTotal(category), 0);

        const totalExpense = data
            ?.filter(category =>
                ["teachersSalary", "employeesSalary", "overhead", "capital"].includes(category.type)
            )
            .reduce((sum, category) => sum + calculateCategoryTotal(category), 0);


        const netProfit = totalIncome - totalExpense;

        return (
            <div className={cls.extend}>
                <EditableCard extraClass={cls.extend__headerBox} titleType={""}>
                    <div className={cls.extend__headerBox__header}>
                        <h1>Umumiy ko'rsatkichlar</h1>
                    </div>

                    <div className={cls.extend__headerBox__main}>
                        <div className={cls.extend__headerBox__main__left}>
                            <TrendingUp color={"#4CAF50"}/>
                            <h1>Umumiy kirim</h1>
                        </div>
                        <h1 className={cls.extend__headerBox__main__article}>{formatCurrency(totalIncome)}</h1>
                    </div>

                    <div className={cls.extend__headerBox__main}>
                        <div className={cls.extend__headerBox__main__left}>
                            <TrendingDown color={"#EF4444"}/>
                            <h1>Umumiy chiqim</h1>
                        </div>
                        <h1 style={{color: "#EF4444"}}
                            className={cls.extend__headerBox__main__article}>{formatCurrency(totalExpense)}</h1>
                    </div>

                    <div className={cls.extend__headerBox__footer}>
                        <div className={cls.extend__headerBox__main__left}>
                            <Calculator color={"#2563EB"}/>
                            <h1>Sof foyda</h1>
                        </div>
                        <h1 className={cls.extend__headerBox__footer__article}> {formatCurrency(netProfit)}</h1>
                    </div>
                </EditableCard>
                <EditableCard extraClass={cls.extend__table} titleType={""}>
                    <div className={cls.extend__table__debt}>
                        <div className={cls.extend__table__debt__header}>
                            <TrendingUp color={"#4CAF50"}/>
                            <h1 className={cls.extend__table__debt__header__article}>Kirim</h1>
                        </div>
                        {
                            data?.filter(category => category.type === "studentsPayments").map((category, index) => (
                                <EditableCard extraClass={cls.extend__table__debt__card} titleType={""}>
                                    <div className={cls.extend__table__debt__card__header}>
                                        <span>
                                            <div style={{background: "#22C55E", padding: "1rem", borderRadius: ".5rem"}}>
                                                <Users color={"#FFFFFF"}/>
                                            </div>

                                           <h1>{category.name}</h1>
                                        </span>
                                        <h1>{formatCurrency(calculateCategoryTotal(category))}</h1>
                                    </div>
                                    <div className={cls.extend__table__debt__card__items}>
                                        {
                                            category.list.map((branch, branchIndex) => (
                                                <div className={cls.extend__table__debt__card__items__item}>
                                                    <span>
                                                        <h1>{branch.name}</h1>
                                                        <h3>{branch.list[0]?.count || 0} ta</h3>
                                                    </span>
                                                    {
                                                        branch.list.map((item) => (
                                                                <h1 style={{color: "#39ae60"}}>{formatCurrency(item.summa)}</h1>
                                                        ))
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>

                                </EditableCard>
                            ))
                        }

                    </div>
                    <div className={cls.extend__table__credit}>
                        <div className={cls.extend__table__credit__header}>
                            <TrendingDown color={"#EF4444"}/>
                            <h1 className={cls.extend__table__credit__header__article}>Chiqim</h1>
                        </div>
                        {
                            data?.filter(category =>
                                ["teachersSalary", "employeesSalary", "overhead", "capital"].includes(category.type)
                            ).map((category, index) => (
                                <EditableCard extraClass={cls.extend__table__credit__card} titleType={""}>
                                    <div className={cls.extend__table__credit__card__header}>
                                        <span>
                                            <div style={{background: "#EF4444", padding: "1rem", borderRadius: ".5rem"}}>
                                                <DollarSign color={"#FFFFFF"}/>
                                            </div>

                                           <h1>{category.name}</h1>
                                        </span>
                                        <h1>{formatCurrency(calculateCategoryTotal(category))}</h1>
                                    </div>
                                    <div className={cls.extend__table__credit__card__items}>
                                        {
                                            category.list.map((branch, branchIndex) => (
                                                <div className={cls.extend__table__credit__card__items__item}>
                                                    <span>
                                                        <h1>{branch.name}</h1>
                                                        <h3>{branch.list[0]?.count || 0} ta</h3>
                                                    </span>
                                                    {
                                                        branch.list.map((item) => (
                                                            <h1 style={{color: "#EF4444"}}>{formatCurrency(item.summa)}</h1>
                                                        ))
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>

                                </EditableCard>
                            ))

                        }
                    </div>
                </EditableCard>
            </div>
        )
    }

    return (
        <div className={cls.main}>
            <div className={cls.main__header}>
                <div className={cls.main__header__box}>
                    <h1 className={cls.main__header__article}>Moliyaviy panel</h1>
                    <p className={cls.main__header__para}>Barcha filiallar bo'yicha to'lovlar va xarajatlarning umumiy
                        ko'rinishi</p>
                </div>
                <Button onClick={() => setActive(!active)} extraClass={cls.main__header__btn}
                        children={active && active ? "Kirim/Chiqim 🔄" : "Yopish"}/>

            </div>

            {(() => {
                if (active) {
                    return (
                        <>
                            {renderCards()}

                            <EditableCard extraClass={cls.main__summary} titleType={""}>
                                <h1>Moliyaviy xulosa</h1>
                                <div className={cls.main__summary__arounder}>
                                    {data?.map((category, branchIndex) => (
                                        <EditableCard
                                            key={branchIndex}
                                            extraClass={cls.main__summary__arounder__box}
                                            titleType={""}
                                        >
                                <span className={cls.main__summary__arounder__box__header}>
                                    {getCategoryIcon(category.type)}
                                    <h2>{category.name}</h2>
                                </span>
                                            <h3>{formatCurrency(calculateCategoryTotal(category))}</h3>
                                        </EditableCard>
                                    ))}
                                </div>
                            </EditableCard>
                        </>
                    )
                } else {
                    return renderDebitSide()
                }
            })()}
        </div>);
};

