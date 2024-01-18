USE [QLPHONGKHAM]
GO
/****** Object:  StoredProcedure [dbo].[uspGetPatientFromAppointment]    Script Date: 1/16/2024 5:19:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[uspGetPatientFromAppointment]
    @date VARCHAR(100),
	@doctorID CHAR(10)
AS
BEGIN
	DECLARE @dateValue DATE;
	SET @dateValue = CAST(@date AS DATE);

	SELECT HOTEN,GIOITINH,SDT,STT,EMAIL FROM LICHHEN
	WHERE NGAYKHAM = @dateValue
END;