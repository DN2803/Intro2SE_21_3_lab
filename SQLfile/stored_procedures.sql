USE [QLPHONGKHAM]
GO
/****** Object:  StoredProcedure [dbo].[uspAddUser]    Script Date: 25/12/2023 11:50:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[uspAddUser]
    @USERNAME VARCHAR(20), 
    @PASSWORD VARCHAR(50), 
	@NGAYTAO DATE,
	@responseMessage NVARCHAR(250) OUTPUT
AS
BEGIN
    SET NOCOUNT ON
    BEGIN TRY
        INSERT INTO dbo.[TAIKHOAN] (USERNAME, PASSWORDHASH, NGAYKHOITAO)
        VALUES(@USERNAME, HASHBYTES('SHA2_512', @PASSWORD), @NGAYTAO)
        SET @responseMessage='Success'
    END TRY
    BEGIN CATCH
        SET @responseMessage=ERROR_MESSAGE() 
    END CATCH
END
GO
/****** Object:  StoredProcedure [dbo].[uspCreateAppointment]    Script Date: 25/12/2023 11:50:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[uspCreateAppointment]
    @phoneNum CHAR(10),
    @date DATE,
    @period NVARCHAR(10),
    @doctorID CHAR(10),
    @patientName NVARCHAR(50),
    @email VARCHAR(30),
    @gender NVARCHAR(3),
    @address NVARCHAR(50),
    @service NVARCHAR(50),
    @responseMessage NVARCHAR(250)='' OUTPUT
AS
BEGIN
    -- Kiểm tra xem bác sĩ có tồn tại hay không
    IF NOT EXISTS (SELECT 1 FROM BACSI WHERE ID = @doctorID)
    BEGIN
        SET @responseMessage='Doctor not found';
        RETURN;
    END

    -- Kiểm tra xem bản ghi đã tồn tại hay chưa
    IF NOT EXISTS (
        SELECT 1 
        FROM dbo.LICHHEN 
        WHERE SDT = @phoneNum AND NGAYKHAM = @date AND BUOIKHAM = @period
    )
    BEGIN
        -- Chèn bản ghi mới vào bảng
		DECLARE @mabacsi char(10);

		-- Gán giá trị từ câu truy vấn SELECT
		SET @mabacsi = (SELECT MABACSI FROM BACSI WHERE ID = @doctorID);
        INSERT INTO LICHHEN(SDT, NGAYKHAM, BUOIKHAM, MABACSI, TRANGTHAIHEN, HOTEN, EMAIL, GIOITINH, DIACHI, DICHVU)
        VALUES (@phoneNum, @date, @period, @mabacsi, N'Chưa', @patientName, @email, @gender, @address, @service);
        
        SET @responseMessage='Inserting new appointment successfully';
    END
    ELSE
    BEGIN
        SET @responseMessage='Existing this appointment';
    END
END;
GO
/****** Object:  StoredProcedure [dbo].[uspGetDoctorsID_Name]    Script Date: 25/12/2023 11:50:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[uspGetDoctorsID_Name]
AS
BEGIN
    SET NOCOUNT ON;
    -- Lấy danh sách bác sĩ từ bảng BACSI
    SELECT ID AS hashtag, HOTEN_BS AS name
    FROM BACSI;
END
GO
/****** Object:  StoredProcedure [dbo].[uspLogin]    Script Date: 25/12/2023 11:50:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[uspLogin]
    @pLoginName VARCHAR(254),
    @pPassword VARCHAR(50),
    @responseMessage NVARCHAR(250)='' OUTPUT
AS
BEGIN
    SET NOCOUNT ON
    DECLARE @temp VARCHAR(254)


    IF EXISTS (SELECT USERNAME FROM TAIKHOAN WHERE USERNAME=@pLoginName)
    BEGIN
       SET @temp=(SELECT USERNAME FROM TAIKHOAN WHERE USERNAME=@pLoginName AND PASSWORDHASH=HASHBYTES('SHA2_512', @pPassword))
	   
       IF(@temp IS NULL)
           SET @responseMessage='Incorrect password'
       ELSE 
           SET @responseMessage='User successfully logged in'
    END
    ELSE
       SET @responseMessage='Invalid login'

END
GO
